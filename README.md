# ICAEBMS 2026 – Conference Website

International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities

- Date: 10-11 August 2026
- Location: Bangkok, Thailand
- Mode: Hybrid (In Person + Virtual)
- Organizer: CERADA / Confworld

## Quick Start

### 1. Install
```bash
npm install
```

### 2. Run Dev Server
```bash
npm start
```
Opens at http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

## Project Structure

```
src/
  components/     Reusable components (Navbar, Footer, Cards, etc.)
  pages/          Page components (Home, About, Submission, etc.)
  data/           conferenceData.js - single source of truth
  App.js          Router & layout
  index.css       Tailwind + custom styles
```

## Deploy to Vercel
```bash
npm i -g vercel && vercel
```

## Deploy to Netlify
Drag & drop the /build folder to app.netlify.com/drop

## Customization
Edit src/data/conferenceData.js to update all conference content.
