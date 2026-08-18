# 🔎 Media Search

A responsive media discovery web app built with **React** that lets you search, preview, download, and save photos, videos, and GIFs from multiple media APIs in one place.

## 🌐 Live Demo

👉 **[View Media Search Live](https://suryastack.github.io/Media-Search/)**

## ✨ Features

- 🔍 Search photos, videos, and GIFs
- 🖼️ Photos powered by Unsplash
- 🎥 Videos powered by Pexels
- 🎞️ GIFs powered by GIPHY
- 👀 Preview media in a modal
- ⬇️ Download media
- 🔖 Save media to a personal collection
- 🗑️ Remove saved media
- 🧹 Clear the entire collection
- 💾 Persist collection using `localStorage`
- 🔔 Toast notifications
- ⏳ Loading state
- ❌ Error handling
- 📱 Responsive design
- 🍔 Responsive hamburger navigation
- 🎨 Dark-themed UI built with Tailwind CSS

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React | UI development |
| Vite | Build tool |
| Redux Toolkit | State management |
| React Router | Routing |
| Axios | API requests |
| Tailwind CSS | Styling |
| React Toastify | Notifications |
| Remix Icon | Icons |
| Unsplash API | Photos |
| Pexels API | Videos |
| GIPHY API | GIFs |
| localStorage | Persistent collection |

## 📁 Project Structure

```text
src/
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   ├── CollectionHeader.jsx
│   └── CollectionCard.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       ├── searchSlice.js
│       └── collectionSlice.js
│
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

Make sure `.env` is included in `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

### 5. Build the project

```bash
npm run build
```

## 🔌 API Integration

Media requests are centralized inside:

```text
src/api/mediaApi.js
```

The app uses:

- **Unsplash API** → Photo search
- **Pexels API** → Video search
- **GIPHY API** → GIF search

## 🔖 Collection System

The collection feature is powered by **Redux Toolkit** and persisted using browser `localStorage`.

Users can:

- Save media
- Prevent duplicate saves
- Remove individual items
- Clear all saved items
- Access saved media after refreshing the page

## 📱 Responsive UI

The interface is designed for:

- 📱 Mobile
- 📟 Tablet
- 💻 Desktop

The navigation changes to a hamburger menu on smaller screens, while the result grid automatically adjusts according to screen size.

## ⚠️ API Key Note

The project uses Vite environment variables:

```js
import.meta.env.VITE_UNSPLASH_KEY
import.meta.env.VITE_PEXELS_KEY
import.meta.env.VITE_GIPHY_KEY
```

The `.env` file should **never be committed to GitHub**.

> **Note:** `VITE_*` variables are exposed to the client-side bundle, so they should not be considered truly secret credentials. A production application should use a backend/server-side proxy for sensitive credentials.

## 🚧 Future Improvements

- [ ] Pagination / infinite scrolling
- [ ] Search history
- [ ] Sorting and filtering
- [ ] More media providers
- [ ] Skeleton loading cards
- [ ] Improved accessibility
- [ ] Backend API proxy
- [ ] Better GitHub Pages route handling
- [ ] Improved download support for third-party media

## 📸 Screenshots

Add screenshots of the application here after deployment.

```text
screenshots/
├── home.png
├── search-results.png
└── collection.png
```

## 📄 License

This project was created as a learning and portfolio project.