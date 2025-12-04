import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Contatti:</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1 0 2 .1 2 .1v2.3H15c-1.2 0-1.6.8-1.6 1.6V12H18l-.5 3h-3.1v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6a4 4 0 0 1 1.7 1.7c.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4a4 4 0 0 1-1.7 1.7c-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6a4 4 0 0 1-1.7-1.7c-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4A4 4 0 0 1 4.6 3c.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m7.3-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </a>

          <a href="mailto:tuemail@example.com" aria-label="Email">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
            </svg>
          </a>
        </div>

        <p className="footer-copyright">
          © Designed by ZAP Group{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            style={{ verticalAlign: "middle", marginLeft: "1px" }}
          >
            <path d="M7 2v13h3v7l7-12h-4l1-8z" />
          </svg>
        </p>
      </div>
    </footer>
  );
}
