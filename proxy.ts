import { paymentProxyFromConfig } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { ExactSvmScheme } from "@x402/svm/exact/server";
import { NextRequest } from "next/server";
import { createPaywall } from "@x402/paywall";
import { evmPaywall } from "@x402/paywall/evm";
import { svmPaywall } from "@x402/paywall/svm";

const svmPayeeAddress = process.env.RESOURCE_SVM_ADDRESS as string;
const facilitatorUrl = process.env.FACILITATOR_URL as string;

const EVM_NETWORK = "eip155:84532" as const; // Base Sepolia
const SVM_NETWORK = "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1" as const; // Solana Devnet
const USDC_DEV = "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr";

if (!facilitatorUrl) {
  console.error("❌ FACILITATOR_URL environment variable is required");
}

const facilitatorClient = new HTTPFacilitatorClient({ url: facilitatorUrl });

const paywall = createPaywall()
  .withNetwork(evmPaywall)
  .withNetwork(svmPaywall)
  .withConfig({
    appName: "x402 Demo",
    appLogo: "/logos/x402-examples.png",
  })
  .build();

const x402PaymentProxy = paymentProxyFromConfig(
  {
    "/video": {
      accepts: [
        {
          payTo: svmPayeeAddress,
          scheme: "exact",
          price: { amount: "1000000", asset: USDC_DEV },
          network: SVM_NETWORK,
        },
      ],
      description: "Access to protected content",
    },
  },
  facilitatorClient,
  [
    { network: EVM_NETWORK, server: new ExactEvmScheme() },
    { network: SVM_NETWORK, server: new ExactSvmScheme() },
  ],
  undefined, // paywallConfig
  paywall, // paywall provider
);

export const proxy = async (req: NextRequest) => {
  console.log("[x402 middleware]", req.method, req.nextUrl.pathname);

  const delegate = x402PaymentProxy as unknown as (
    request: NextRequest,
  ) => ReturnType<typeof x402PaymentProxy>;
  return delegate(req);
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/", // Include the root path explicitly
  ],
};
