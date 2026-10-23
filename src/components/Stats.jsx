export default function Stats() {
  return (
    <section className="stats-section" aria-label="Ключевые параметры">
      <div className="container">
        <div className="stats-panel">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">11+</div>
              <div className="stat-label">Модулей в приложении</div>
              <p className="stat-text">Единая экосистема механик для удержания и вовлечения.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Канала дистрибуции</div>
              <p className="stat-text">App Store, Google Play и RuStore — охват мобильной аудитории.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">Росмолодёжь</div>
              <div className="stat-label">Грантовая поддержка</div>
              <p className="stat-text">Социальный продукт, бесплатный для конечного пользователя.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">Договор</div>
              <div className="stat-label">Юридическое оформление</div>
              <p className="stat-text">Фиксация формата, сроков, KPI и порядка отчётности.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
