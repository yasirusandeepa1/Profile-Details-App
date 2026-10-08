# Profile Details App – React

A complete React/Vite implementation of the **01 – Profile Details App** screen shown in the supplied mini-project slide.

## Included

- Responsive mobile-style profile screen
- Profile avatar and NSBM logo assets
- Name, email and points sections
- Verified profile badge
- **+** button interaction to add a point
- Edit button with a working profile-edit modal
- Form validation/fallback values
- Success toast notifications
- Responsive layout for desktop and mobile
- Reference screenshot stored in `src/assets/reference-screen.png`

## Requirements

- Node.js 18+ recommended
- npm

## Run the project

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub submission

1. Create a **public** repository on GitHub.
2. Open this project folder in VS Code.
3. Run:

```bash
git init
git add .
git commit -m "Complete Profile Details React app"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

4. Test the public repository URL in an incognito/private browser window.
5. Copy the working repository URL into the required Word document.
6. Rename the Word document using your student index number.
7. Upload the renamed Word document to the NSBM submission area.

## Project structure

```text
Profile_Details_App_React/
├── src/
│   ├── assets/
│   │   ├── nsbm-logo.png
│   │   ├── profile-avatar.png
│   │   └── reference-screen.png
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
