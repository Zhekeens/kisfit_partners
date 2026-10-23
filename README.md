# КИСФИТ — лендинг партнёрской программы

Одностраничный маркетинговый сайт для партнёров КИСФИТ: фитнес-приложения с игровыми механиками (миссии, прогресс, командные активности, геолокация). Страница объясняет форматы сотрудничества, показывает продукт и ведёт к контакту с командой.

О продукте и сайте

КИСФИТ — мобильное приложение для пользователей (App Store, Google Play, RuStore). На лендинге описана партнёрская программа для:

- фитнес-клубов и площадок;
- брендов и рекламодателей;
- городских и социальных проектов.

На странице есть блоки: главный экран, цифры и преимущества, форматы интеграции, портфолио и кейсы, калькулятор ориентировочного бюджета, форма обратной связи и подвал с юридическими ссылками.

## Полезные ссылки

| Ресурс | URL |
| :--- | :--- |
| Основной сайт КИСФИТ | [https://kisfit.ru/](https://kisfit.ru/) |
| Партнёрский лендинг (прод) | [https://kisfit.ru/partners/](https://kisfit.ru/partners/) |
| Поддержка | [https://kisfit.ru/support.html](https://kisfit.ru/support.html) |
| Репозиторий этого проекта | [https://github.com/Zhekeens/kisfit_partners](https://github.com/Zhekeens/kisfit_partners) |
| Почта для партнёров | support@kisfit.team |

## Технологии

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- Статическая сборка; на проде приложение отдаётся с базовым путём `/partners/` (см. `vite.config.js`)

## Требования

- [Node.js](https://nodejs.org/)
- npm (идёт вместе с Node.js)

## Запуск для разработки

bash
git clone https://github.com/Zhekeens/kisfit_partners.git
cd kisfit_partners
npm install
npm run dev


Vite выведет адрес локального сервера (обычно [http://localhost:5173](http://localhost:5173)). Изменения в коде подхватываются без перезагрузки страницы.


Синхронизация ассетов

Часть изображений подтягивается из соседнего каталога `../landing/assets` (если вы работаете внутри монорепозитория `kisfit_server`):




Сборка и деплой

| Команда | Назначение |
| :--- | :--- |
| `npm run build` | Production-сборка в папку `dist/` (base URL `/partners/`) |
| `npm run preview` | Локальный просмотр собранного `dist/` |
| `npm run build:landing` | `sync:assets` → сборка → копирование `dist` в `../landing/partners` (для основного лендинга kisfit.ru) |
| `npm run lint` | Проверка кода (oxlint) |

После `npm run build:landing` статика оказывается в репозитории основного лендинга и публикуется вместе с [kisfit.ru](https://kisfit.ru/) по пути `/partners/`.

Структура проекта

```
landing-wireframe/
├── public/assets/          # Картинки, видео, иконки
├── scripts/
│   └── sync-public-assets.mjs
├── src/
│   ├── App.jsx             # Порядок секций на странице
│   ├── App.css             # Стили компонентов и layout
│   ├── index.css           # Глобальные стили
│   ├── lib/assetUrl.js     # URL ассетов с учётом BASE_URL
│   └── components/         # Секции лендинга
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── Services.jsx
│       ├── Portfolio.jsx
│       ├── Calculator.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Background.jsx
│       └── MotivationToggle.jsx
├── index.html
├── vite.config.js
└── package.json
```


