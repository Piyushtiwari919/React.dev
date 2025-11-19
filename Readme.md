## Clone of Swiggy. Build in React.js
# Parcel + React

A minimal, modern starter README for a React app bundled with **Parcel**. This README provides an overview, setup instructions, development and production commands, and tips for common tasks.

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)

  * [Install dependencies](#install-dependencies)
  * [Run in development](#run-in-development)
  * [Build for production](#build-for-production)
  * [Preview production build](#preview-production-build)
* [Project Structure](#project-structure)
* [Environment Variables](#environment-variables)
* [Scripts](#scripts)
* [Testing & Linting](#testing--linting)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [Troubleshooting](#troubleshooting)
* [License](#license)

---

## About

This repository is a React application bundled using **Parcel**. Parcel is a zero-configuration web application bundler that aims to make getting started fast and the development experience pleasant.

Use this template if you want a lightweight React setup without manual Webpack configuration.

---

## Features

* React with functional components and hooks
* Fast development server with HMR (Hot Module Replacement)
* Zero-config bundling with Parcel
* Easy build output for production
* Example scripts for linting, formatting, and testing

---

## Prerequisites

* Node.js (LTS recommended) and npm or Yarn
* Git (optional, for version control and pushing to remote)

---

## Getting Started

Clone the repo (or create a new project and copy these files):

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn
```

### Run in development

Start the Parcel dev server (serves `src/index.html` by default):

```bash
npm start
# or
yarn start
```

Open [http://localhost:1234](http://localhost:1234) (Parcel prints the dev URL in the terminal).

### Build for production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder.

### Preview production build

You can preview the `dist` folder with a static server. If you have `serve` installed globally:

```bash
npm run serve
# or
yarn serve
```

Or use any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

A suggested directory layout:

```
├── dist/                # Production build output (ignored in Git)
├── node_modules/
├── public/              # Static assets (optional)
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.jsx
│   └── index.html
├── .gitignore
├── package.json
├── README.md
└── .env                 # Optional environment variables (ignored)
```

Adjust structure to fit your project needs.

---

## Environment Variables

If you use environment variables, add them to a `.env` file and include `.env` in your `.gitignore` to avoid leaking secrets.

Example `.env`:

```
API_URL=https://api.example.com
```

**Note:** Parcel injects environment variables at build time. For sensitive production secrets, use your hosting platform's environment/configuration features (Netlify, Vercel, etc.).

---

## Scripts

Example `package.json` scripts you can add or adapt:

```json
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html --public-url ./",
  "serve": "serve -s dist",
  "lint": "eslint 'src/**/*.{js,jsx}'",
  "format": "prettier --write 'src/**/*.{js,jsx,json,css,md}'",
  "test": "jest"
}
```

* `start` — run Parcel dev server with HMR
* `build` — produce optimized production bundle
* `serve` — serve the built app locally for preview
* `lint` / `format` / `test` — optional developer tools

---

## Testing & Linting

Add your preferred testing framework (Jest, React Testing Library) and linters (ESLint, Prettier). Example packages:

```bash
npm install --save-dev jest @testing-library/react eslint prettier
```

Configure them with sensible defaults and add the matching scripts listed above.

---

## Deployment

Common deployment options:

* **Netlify** — drag & drop `dist`, or connect repo and set build command `npm run build` and publish directory `dist`.
* **Vercel** — connect the repo and set up a project. For Parcel apps, use the build command `npm run build` and the output directory `dist`.
* **GitHub Pages** — build locally and push the `dist` contents to a `gh-pages` branch or use `gh-pages` package to automate.

---

## Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

Please follow the repository's coding style, lint, and test before submitting.

---

## Troubleshooting

* **HMR not updating?** Try restarting the dev server. Clear the browser cache if needed.
* **Build errors?** Check the terminal for stack traces. Verify dependency versions.
* **Environment variables not present?** Remember that Parcel injects them at build time.

---

## Helpful Tips

* Add `dist/`, `node_modules/`, and `.env` to `.gitignore`.
* Keep commits small and descriptive.
* Use feature branches for non-trivial changes.

---

## License

This project is provided under the MIT License. See `LICENSE` for details.

---

## Acknowledgements

* [Parcel](https://parceljs.org)
* [React](https://reactjs.org)

---

*Happy coding!* 🚀
