import Link from "next/link";
import { FaGithub, FaTelegram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-icon">
                <i className="fas fa-coins" aria-hidden="true"></i>
              </div>
              <span className="brand-text">x402</span>
            </div>
            <p>
              Revolutionizing content monetization through secure micropayments
              on the blockchain.
            </p>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links" aria-label="Resource links">
              <li>
                <Link
                  href="https://www.x402.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  x402 Protocol
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ElliteAnts/x402-Five-Proxy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.coinbase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coinbase
                </Link>
              </li>
              <li>
                <Link
                  href="https://base.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Base Network
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links" aria-label="Social links">
              <Link
                href="https://github.com/ElliteAnts/x402-Five-Proxy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://t.me/WebFiveFingers"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Telegram"
              >
                <FaTelegram />
              </Link>
              <Link
                href="https://www.x402.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Website"
              >
                <FaGlobe />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} x402 Micropayments Platform. Built with{" "}
            <i className="fas fa-heart" aria-hidden="true"></i> for the
            decentralized web.
          </p>
        </div>
      </div>
    </footer>
  );
}
