import { assetUrl } from '../lib/assetUrl';

const pillars = [
  {
    num: '01',
    title: 'Задача продукта',
    text: 'Сформировать устойчивую привычку к движению за счёт целей, обратной связи и социального контекста — без перегруза классическими фитнес-сценариями.',
  },
  {
    num: '02',
    title: 'Целевая аудитория',
    text: 'Активные пользователи 16–35 лет в городах: мобильная аудитория, открытая к цифровым форматам вовлечения и командным активностям.',
  },
  {
    num: '03',
    title: 'Инструменты платформы',
    text: 'Миссии, карта и гео-сценарии, система прогресса, видео-проверка упражнений, челленджи и события — база для партнёрских интеграций.',
  },
];

const screenShots = ['screen-11.jpg', 'screen-12.jpg', 'screen-13.jpg', 'screen-14.jpg'];

export default function Portfolio() {
  return (
    <section id="about" className="portfolio-section section-band">
      <div className="container">
        <div className="section-header section-header--left">
          <p className="eyebrow">О продукте</p>
          <h2>КИСФИТ как платформа для партнёров</h2>
          <p>
            Продукт развивается как долгосрочная экосистема активности. Для бизнеса и организаций это канал
            коммуникации с мотивированной аудиторией.
          </p>
        </div>

        <div className="about-pillars">
          {pillars.map((item) => (
            <article key={item.num} className="pillar">
              <span className="pillar__num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="screens-panel">
          <p className="screens-panel__title">Фрагменты интерфейса</p>
          <div className="screens-row" aria-label="Скриншоты приложения">
            {screenShots.map((name) => (
              <div key={name} className="screen-thumb">
                <img src={assetUrl(`assets/${name}`)} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="grant-banner">
          <img src={assetUrl('assets/rosmolodezh-grants.jpg')} alt="" width={64} height={64} />
          <div>
            <p className="grant-banner__title">Поддержка Росмолодёжи</p>
            <p className="grant-banner__text">
              Социально значимый проект: для конечного пользователя приложение бесплатно. Партнёрские
              инициативы строим вокруг ЗОЖ, городской активности и измеримого охвата.
            </p>
          </div>
        </div>

        <div className="center-action">
          <a href="https://kisfit.ru/" className="btn btn-outline" target="_blank" rel="noreferrer">
            Публичный сайт kisfit.ru
          </a>
        </div>
      </div>
    </section>
  );
}
