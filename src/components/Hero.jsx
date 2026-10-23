import { assetUrl } from '../lib/assetUrl';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Партнёрская программа</p>

          <h1 className="hero-title">
            Вовлечение аудитории через мобильный продукт с измеримым результатом
          </h1>

          <p className="hero-description">
            КИСФИТ — фитнес-приложение с игровыми механиками: миссии, прогресс, командные активности и
            геолокационные сценарии. Предлагаем партнёрам форматы интеграции с понятными KPI и юридическим
            оформлением.
          </p>

          <ul className="hero-segments" aria-label="Типы партнёров">
            <li>Фитнес-клубы и площадки</li>
            <li>Бренды и рекламодатели</li>
            <li>Городские и социальные проекты</li>
          </ul>

          <div className="hero-actions">
            <a href="#formats" className="btn btn-primary">
              Форматы сотрудничества
            </a>
            <a href="#contact" className="btn btn-outline">
              Запросить презентацию
            </a>
          </div>

          <p className="hero-note">
            Дистрибуция: App Store · Google Play · RuStore · приложение бесплатно для пользователей
          </p>
        </div>

        <div className="hero-visual">
          <img
            className="hero-screenshot"
            src={assetUrl('assets/hero-app-screen.png')}
            alt="Интерфейс приложения КИСФИТ"
            width={390}
            height={844}
          />
        </div>
      </div>
    </section>
  );
}
