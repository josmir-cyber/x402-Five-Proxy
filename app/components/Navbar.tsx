"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="nav-container">
            <div className="nav-brand">
                <div className="brand-icon">
                    <i className="fas fa-coins"></i>
                </div>
                <span className="brand-text">x402</span>
            </div>
            <div className="nav-menu">
                <a href="#features" className="nav-link">Features</a>
                <a href="#how-it-works" className="nav-link">How it Works</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="https://www.x402.org/" target="_blank" className="nav-link external">
                    <i className="fas fa-external-link-alt"></i>
                    Protocol
                </a>
            </div>
            <div className="nav-actions">
                <a href="/video" className="btn btn-primary">
                    <i className="fas fa-play"></i>
                    Access Content
                </a>
            </div>
            <div className="mobile-menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
  );
}
