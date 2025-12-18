# TreeLink 🚀

**A minimal, privacy-friendly Linktree clone built with Next.js, Tailwind CSS, and MongoDB.**

TreeLink lets users create a single public profile (handle) with a photo and a list of links to share across social platforms.

---

## 🔍 Project Overview

- Framework: **Next.js 16** (App Router)
- UI: **Tailwind CSS** (via PostCSS)
- Database: **MongoDB** (via Mongoose)
- Notifications: **react-toastify**

Core features:
- Create a profile with a unique `handle`, `photo` URL, and multiple links
- Public profile pages at `/{handle}` that list user links
- Simple dashboard for creating profiles (no authentication)
- REST API endpoints to create and fetch profiles

---

## 🧭 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (Atlas or local)

### Environment
Create a `.env.local` in the project root with at least:

```
MONGO_URI="your-mongodb-connection-string"
```

### Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

---

## ⚙️ Scripts

- `npm run dev` — run in development mode
- `npm run build` — build for production
- `npm run start` — run production build
- `npm run lint` — run ESLint

---

## 🗂️ Project Structure

Key files and folders:

- `app/` — Next.js app routes and pages
  - `app/page.js` — Landing / marketing page
  - `app/dashboard/page.js` — Dashboard to create a profile
  - `app/[handle]/page.js` — Public profile view
  - `app/api/profile/route.js` — POST to create profiles
  - `app/api/profile/[handle]/route.js` — GET a profile by handle
  - `app/components/navbar.js` — Navigation UI
- `models/Profile.js` — Mongoose schema for profiles
- `lib/mongodb.js` — MongoDB connection helper

---

## 📐 Data Model

The `Profile` model (Mongoose):

```js
{
  handle: String (unique, required),
  photo: String,
  links: [ { text: String, url: String } ],
  timestamps: true
}
```

---

## 🔌 API

### Create profile

POST /api/profile

Request body example:

```json
{
  "handle": "johndoe",
  "photo": "https://example.com/photo.jpg",
  "links": [
    { "text": "Twitter", "url": "https://twitter.com/johndoe" },
    { "text": "Portfolio", "url": "https://johndoe.com" }
  ]
}
```

Responses:
- `201` — Profile saved successfully
- `400` — Validation (missing fields)
- `409` — Handle already exists
- `500` — Internal server error

### Get profile

GET /api/profile/:handle

Response: profile JSON (or `404` if not found)

---

## 🧪 Testing the App (Manual)

- Use the Dashboard at `/dashboard` to create a profile (enter handle, links, photo URL)
- After saving, you'll be redirected to `/{handle}` to view the profile
- Use cURL or Postman to call `POST /api/profile` directly

---







## �📦 Deployment

- This app is compatible with Vercel for zero-config deployment.
- Ensure `MONGO_URI` is set in the deployment environment variables.

---

## ♻️ Notes & Future Improvements

- Add authentication to allow users to edit/delete profiles
- Add link analytics and click tracking
- Add validation & better URL sanitization
- Improve UX for photo uploads (file storage or direct uploads)

---

## 🤝 Contributing

Contributions are welcome — open an issue or submit a PR.


