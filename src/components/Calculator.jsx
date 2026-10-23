import { useMemo, useState } from 'react';

const recommendations = {
  club: {
    title: 'Фитнес-клуб / площадка',
    text: 'Рекомендуем гео-миссии, чек-ины, совместные челленджи и промо-акции у вашего адреса. Хороший старт — пилот на 4–6 недель.',
  },
  brand: {
    title: 'Бренд / рекламодатель',
    text: 'Подойдут спонсорские миссии, брендированные награды, баннеры в приложении и отчётность по охвату и действиям пользователей.',
  },
  city: {
    title: 'Город / фонд / НКО',
    text: 'Фокус на кампаниях ЗОЖ, событиях в парках, образовательных миссиях и вовлечении молодёжи через игровые механики.',
  },
  edu: {
    title: 'Образование / вуз / колледж',
    text: 'Корпоративные лиги, соревнования между группами, миссии на кампусе и отчёты по активности для администрации.',
  },
};

export default function Calculator() {
  const [formData, setFormData] = useState({
    partnerType: 'club',
    city: '',
    goal: 'reach',
    budget: 'discuss',
  });
  const [submitted, setSubmitted] = useState(false);

  const hint = useMemo(() => recommendations[formData.partnerType], [formData.partnerType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="brief" className="calculator-section section-band">
      <div className="container calc-container">
        <div className="calc-info">
          <p className="eyebrow">Подбор формата</p>
          <h2>Ориентир по модели сотрудничества</h2>
          <p>
            Короткий опрос помогает сопоставить вашу задачу с типовым форматом. Итоговые условия, сроки и бюджет
            фиксируем после созвона и брифа.
          </p>
          <ul className="feature-list">
            <li>
              <b>Без обязательств</b> — предварительная рекомендация, не коммерческое предложение
            </li>
            <li>
              <b>Пилот</b> — возможен локальный запуск на ограниченный период
            </li>
            <li>
              <b>Масштаб</b> — от одной точки до федеральной кампании
            </li>
          </ul>
        </div>

        <div className="calc-card">
          <h3>Ваш запрос</h3>
          <form onSubmit={handleSubmit} className="calc-form">
            <div className="form-group">
              <label htmlFor="partnerType">Кто вы</label>
              <select
                id="partnerType"
                value={formData.partnerType}
                onChange={(e) => {
                  setSubmitted(false);
                  setFormData({ ...formData, partnerType: e.target.value });
                }}
              >
                <option value="club">Фитнес-клуб / спортплощадка</option>
                <option value="brand">Бренд / рекламодатель</option>
                <option value="city">Город / фонд / НКО</option>
                <option value="edu">Образование / кампус</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="city">Город или регион</label>
              <input
                id="city"
                type="text"
                placeholder="Например, Москва"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="goal">Главная цель</label>
              <select
                id="goal"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              >
                <option value="reach">Охват и узнаваемость</option>
                <option value="traffic">Поток в точку / на событие</option>
                <option value="engagement">Вовлечение и удержание</option>
                <option value="social">Социальный / образовательный эффект</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Бюджет (ориентир)</label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="discuss">Обсудим на созвоне</option>
                <option value="pilot">Пилот / бартер</option>
                <option value="mid">Средний проект</option>
                <option value="large">Крупная кампания</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Показать рекомендацию
            </button>
          </form>

          {submitted && hint && (
            <div className="brief-result" role="status">
              <strong>{hint.title}</strong>
              <br />
              {hint.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
