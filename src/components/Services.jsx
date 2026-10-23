import { assetUrl } from '../lib/assetUrl';

const formats = [
  {
    tag: 'Локации',
    title: 'Фитнес-клубы и площадки',
    image: 'assets/screen-12.jpg',
    text: 'Привлечение посетителей через миссии, события на карте и партнёрские точки в приложении.',
    points: ['Гео-миссии у адреса объекта', 'Совместные челленджи и акции', 'Промокоды и бонусы за активность'],
  },
  {
    tag: 'Бренды',
    title: 'Реклама и спецпроекты',
    image: 'assets/screen-13.jpg',
    text: 'Нативные интеграции в продуктовый контур: брендированные миссии, спонсорство и отчётность.',
    points: ['Брендированные миссии и призы', 'Размещение в ленте и на карте', 'Метрики показов и вовлечения'],
  },
  {
    tag: 'Город',
    title: 'Муниципалитеты и фонды',
    image: 'assets/screen-11.jpg',
    text: 'Продвижение ЗОЖ, спортивной инфраструктуры и молодёжных программ через игровые механики.',
    points: ['Кампании «активный город»', 'События в парках и на стадионах', 'Образовательные миссии'],
  },
];

export default function Services() {
  return (
    <section id="formats" className="services-section">
      <div className="container">
        <div className="section-header section-header--left">
          <p className="eyebrow">Форматы</p>
          <h2>Точки соприкосновения с вашей задачей</h2>
          <p>
            Базовые модели сотрудничества можно комбинировать — от локального пилота до федеральной кампании с
            единым медиапланом.
          </p>
        </div>

        <div className="services-grid">
          {formats.map((item) => (
            <article key={item.title} className="service-card">
              <div className="card-image">
                <img src={assetUrl(item.image)} alt="" loading="lazy" />
              </div>
              <div className="card-body">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="card-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
