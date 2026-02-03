"use client";
import "./authenticate.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthenticatePage() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push("/video"), 6000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <section className="hero hero-style">
      <div className="container">
        <div className="payment-processing-container">
          <div className="processing-header">
            <div className="processing-badge">
              <i className="fas fa-sync-alt fa-spin"></i>
              <span>Processing Payment</span>
            </div>
            <h1 className="processing-title">
              Securing Your <span className="gradient-text">Transaction</span>
            </h1>
            <p className="processing-description">
              Your $0.10 USDC payment is being processed on the Base network.
              This should only take a moment.
            </p>
          </div>

          <div className="payment-card processing-card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="card-title">Payment in Progress</div>
            </div>
            <div className="card-content">
              <div className="payment-amount">
                <span className="currency">USDC</span>
                <span className="amount">0.10</span>
              </div>
              <div className="payment-details">
                <div className="detail">
                  <span className="label">Network:</span>
                  <span className="value">Base</span>
                </div>
                <div className="detail">
                  <span className="label">Status:</span>
                  <span className="value processing">Processing...</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="progress-bar">
                <div className="progress-fill processing"></div>
              </div>
            </div>
          </div>

          <div className="processing-steps">
            <div className="step-item completed">
              <div className="step-icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="step-content">
                <h4>Connecting to Base Network</h4>
                <p>Establishing secure connection to Base L2</p>
              </div>
            </div>
            <div className="step-item completed">
              <div className="step-icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="step-content">
                <h4>Validating Transaction</h4>
                <p>Verifying USDC payment details</p>
              </div>
            </div>
            <div className="step-item processing">
              <div className="step-icon">
                <i className="fas fa-sync-alt fa-spin"></i>
              </div>
              <div className="step-content">
                <h4>Awaiting Confirmation</h4>
                <p>Waiting for blockchain confirmation</p>
              </div>
            </div>
          </div>

          <div className="security-features">
            <div className="security-item">
              <i className="fas fa-lock"></i>
              <span>Secure Payment</span>
            </div>
            <div className="security-item">
              <i className="fas fa-bolt"></i>
              <span>Base Network</span>
            </div>
            <div className="security-item">
              <i className="fas fa-dollar-sign"></i>
              <span>$0.10 USDC</span>
            </div>
          </div>

          <div className="warning-message">
            <i className="fas fa-info-circle"></i>
            <p>
              Please do not close this window. You will be redirected
              automatically once the payment is confirmed.
            </p>
          </div>

          <div className="processing-actions">
            <a href="/" className="btn btn-secondary">
              <i className="fas fa-times"></i>
              Cancel Payment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
