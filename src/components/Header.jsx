import { assetUrl } from '../lib/assetUrl';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a className="logo" href="#top">
          <img
            className="logo__img"
            src={assetUrl('assets/kisfit-logo-wordmark.png')}
            alt="КИСФИТ"
            width={160}
            height={48}
          />
          <span className="logo__badge">Partners</span>
        </a>

        <nav className="nav-menu" aria-label="Навигация">
          <a href="#formats">Форматы</a>
          <a href="#about">Продукт</a>
          <a href="#brief">Подбор</a>
          <a href="#contact">Контакты</a>
        </nav>

        <div className="header-actions">
          <a href="https://kisfit.ru/" className="btn btn-ghost btn-sm" target="_blank" rel="noreferrer">
            kisfit.ru
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
}
