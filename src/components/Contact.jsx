import { useState } from 'react';

const SUPPORT_EMAIL = 'support@kisfit.team';

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Партнёрство КИСФИТ — ${company || name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nКомпания: ${company}\nТелефон: ${phone}\n\nЗадача:\n${message}`,
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <p className="eyebrow">Контакты</p>
          <h2>Запрос на сотрудничество</h2>
          <p>
            Опишите организацию и задачу — подготовим формат интеграции, ориентиры по срокам и метрикам. Ответ в
            рабочие дни, как правило, в течение одного дня.
          </p>
          <ul className="feature-list">
            <li>Консультация 20–30 минут</li>
            <li>Презентация механик под вашу отрасль</li>
            <li>Черновик медиаплана или ТЗ на интеграцию</li>
          </ul>
          <div className="contact-links">
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <a href="https://kisfit.ru/support.html" target="_blank" rel="noreferrer">
              Центр поддержки на сайте
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Заявка партнёра</h3>
          <p className="form-subtitle">Откроется письмо в почтовом клиенте — проверьте текст перед отправкой</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Имя</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Как к вам обращаться"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-company">Компания или проект</label>
              <input
                id="contact-company"
                type="text"
                placeholder="Название"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-phone">Телефон или Telegram</label>
              <input
                id="contact-phone"
                type="text"
                placeholder="+7 … или @username"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Задача</label>
              <textarea
                id="contact-message"
                placeholder="Город, формат, сроки, ожидания по охвату…"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
