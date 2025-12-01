# How to Deploy This React Portfolio

This project is built with React 18, TypeScript, and Tailwind CSS. Since it is a client-side Single Page Application (SPA) using `HashRouter`, it can be deployed to any static site hosting service.

## 1. Prerequisites

Ensure you have Node.js (version 16 or higher) installed on your machine.

## 2. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

## 3. Build for Production

To create a production-ready build, run:

```bash
npm run build
```

This will create a `dist` (or `build`) folder containing your compiled HTML, CSS, and JavaScript files.

## 4. Deployment Options

### Option A: Netlify (Recommended - Easiest)

1.  **Drag and Drop**: Log in to [Netlify](https://www.netlify.com/), go to "Sites", and drag your `dist` folder onto the page.
2.  **Git Integration**:
    *   Push your code to GitHub.
    *   Log in to Netlify and click "Add new site" > "Import an existing project".
    *   Select your GitHub repository.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist` (or `build`)
    *   Click "Deploy".

### Option B: Vercel

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in your project folder.
3.  Follow the prompts (accept default settings mostly).
4.  **Git Integration**: Similar to Netlify, connect your GitHub repo to Vercel.
    *   **Framework Preset**: Vite (or Create React App depending on your bundler).
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`

### Option C: GitHub Pages

1.  In `package.json`, add a `"homepage"` field:
    ```json
    "homepage": "https://yourusername.github.io/your-repo-name",
    ```
2.  Install `gh-pages`:
    ```bash
    npm install --save-dev gh-pages
    ```
3.  Add these scripts to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
4.  Run `npm run deploy`.

## Important Note on Routing

This app uses `HashRouter` (`/#/project?id=...`). This is the safest method for static hosting (like GitHub Pages) because it avoids "404 Not Found" errors on page refresh.

If you switch to `BrowserRouter` in `App.tsx`, you must configure your host (Netlify/Vercel) to redirect all requests to `index.html`.
