import React from "react";
import "../styles.css";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>📞 צרו קשר</h3>
          <p>📧 Email: <a href="mailto:coachnapso@gmail.com">coachnapso@gmail.com</a></p>
          <p>📱 Phone: <a href="tel:+972528044482">+972-52-804-4482</a></p>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h3>📲 עקובו אחרי</h3>
          <div className="social-icons">
            <a href="https://wa.me/+972528044482" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a href="https://www.instagram.com/nartnpso" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="https://www.tiktok.com/@coachnapso" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon tiktok" />
            </a>
            <a href="https://www.facebook.com/share/1PvMWPxTLw/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Napso Fitness. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
