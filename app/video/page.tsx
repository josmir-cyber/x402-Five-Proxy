import Link from "next/link";
import "./video.css";

export default function VideoPage() {
  return (
    <main className="video-section">
      <section className="hero hero-style">
        <div className="container">
          <div className="success-header">
            <div className="success-badge">
              <i className="fas fa-check-circle" aria-hidden="true"></i>
              <span>Payment Successful</span>
            </div>
            <h1 className="success-title">
              Enjoy Your <span className="gradient-text">Premium Content</span>
            </h1>
            <p className="success-description">
              You've successfully unlocked this video with a secure $0.10 USDC
              micropayment. Welcome to the future of content monetization!
            </p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-container-wrapper">
            <div className="video-header">
              <h2>Premium Video Content</h2>
              <p>Exclusive content unlocked through x402 micropayments</p>
            </div>

            <div className="video-player-container">
              <video
                id="premium-video"
                width="100%"
                height="450"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMUUyOTNCIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iNDAiIGZpbGw9IiM2NDc0OEYiLz4KPHBhdGggZD0iTTM4MCAyMDUgTDM4MCAyNDUgTDQyMCAyMjUgTDM4MCAyMDUgWiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="video-info">
              <div className="video-stats">
                <div className="stat-item">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Paid $0.10 USDC</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-unlock" aria-hidden="true"></i>
                  <span>Content Unlocked</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-video" aria-hidden="true"></i>
                  <span>Unlimited Replays</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <span>Access Duration: Unlimited</span>
                </div>
              </div>

              <div className="video-details">
                <h3>Transaction Details</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="label">Payment Amount:</span>
                    <span className="value">$0.10 USDC</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Network:</span>
                    <span className="value">Base</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Transaction Status:</span>
                    <span className="value success">Confirmed</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Access Granted:</span>
                    <span className="value success">Yes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="video-actions">
              <Link href="/" className="btn btn-primary">
                <i className="fas fa-home" aria-hidden="true"></i>
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
