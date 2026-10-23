export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>© {new Date().getFullYear()} КИСФИТ. Партнёрская программа.</div>
        <nav className="footer-links" aria-label="Ссылки">
          <a href="https://kisfit.ru/" target="_blank" rel="noreferrer">
            kisfit.ru
          </a>
          <a href="https://kisfit.ru/privacy.html" target="_blank" rel="noreferrer">
            Конфиденциальность
          </a>
          <a href="https://kisfit.ru/terms.html" target="_blank" rel="noreferrer">
            Условия
          </a>
        </nav>
      </div>
    </footer>
  );
}
