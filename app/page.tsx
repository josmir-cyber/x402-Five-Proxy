import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-bolt" aria-hidden="true"></i>
              <span>Powered by x402 Protocol</span>
            </div>
            <h1 className="hero-title">
              The Future of{" "}
              <span className="gradient-text">Content Monetization</span>
            </h1>
            <p className="hero-description">
              Experience seamless micropayments for premium content. Pay only
              for what you consume with instant, secure USDC transactions on the
              Base network.
            </p>
            <div className="hero-actions">
              <Link href="/video" className="btn btn-primary btn-large">
                <i className="fas fa-play-circle" aria-hidden="true"></i>
                Start Watching - $0.10 USDC
              </Link>
              <Link href="#features" className="btn btn-secondary btn-large">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">$0.10</div>
                <div className="stat-label">Per Video</div>
              </div>
              <div className="stat">
                <div className="stat-value">Instant</div>
                <div className="stat-label">Payment</div>
              </div>
              <div className="stat">
                <div className="stat-value">Secure</div>
                <div className="stat-label">Blockchain</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="payment-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-coins" aria-hidden="true"></i>
                </div>
                <div className="card-title">x402 Payment</div>
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
                    <span className="value success">Confirmed</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose x402?</h2>
            <p>
              Revolutionary features that make micropayments simple and secure
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-rocket" aria-hidden="true"></i>
              </div>
              <h3>Lightning Fast</h3>
              <p>
                Instant payment processing with sub-second confirmation times on
                Base network.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign" aria-hidden="true"></i>
              </div>
              <h3>True Micropayments</h3>
              <p>
                Pay as little as $0.10 per video with minimal transaction fees
                and no hidden costs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
              </div>
              <h3>Secure & Private</h3>
              <p>
                Blockchain-secured transactions with complete privacy and no
                personal data collection.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-network-wired" aria-hidden="true"></i>
              </div>
              <h3>Base Network</h3>
              <p>
                Built on Coinbase's Base L2 for ultra-low fees and seamless USDC
                integration.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-code" aria-hidden="true"></i>
              </div>
              <h3>Open Source</h3>
              <p>
                Fully transparent codebase. Inspect, audit, and contribute to
                the future of payments.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users" aria-hidden="true"></i>
              </div>
              <h3>Creator Friendly</h3>
              <p>
                Direct monetization for content creators with instant payouts
                and no intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple, secure, and instant content access in three steps</p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Select Content</h3>
                <p>Choose the premium video content you want to access</p>
              </div>
            </div>
            <div className="step-connector">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pay with USDC</h3>
                <p>Complete secure $0.10 USDC payment via x402 protocol</p>
              </div>
            </div>
            <div className="step-connector">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Enjoy Content</h3>
                <p>Access your premium content instantly and securely</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Simple Pricing</h2>
            <p>Pay only for what you consume, nothing more</p>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Pay-Per-View</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">1</span>
                <span className="period">per video</span>
              </div>
            </div>
            <div className="pricing-features">
              <div className="feature">
                <i className="fas fa-check" aria-hidden="true"></i>
                <span>Instant access to premium content</span>
              </div>
              <div className="feature">
                <i className="fas fa-check" aria-hidden="true"></i>
                <span>No subscription required</span>
              </div>
              <div className="feature">
                <i className="fas fa-check" aria-hidden="true"></i>
                <span>Unlimited replays</span>
              </div>
              <div className="feature">
                <i className="fas fa-check" aria-hidden="true"></i>
                <span>Secure USDC payments</span>
              </div>
              <div className="feature">
                <i className="fas fa-check" aria-hidden="true"></i>
                <span>Base network efficiency</span>
              </div>
            </div>
            <Link href="/video" className="btn btn-primary btn-full">
              <i className="fas fa-play" aria-hidden="true"></i>
              Start Watching Now
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Future?</h2>
            <p>
              Join thousands of users already enjoying seamless micropayments
            </p>
            <Link href="/video" className="btn btn-primary btn-large">
              <i className="fas fa-rocket" aria-hidden="true"></i>
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
