# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Rsbuild + Module Federation. Rsbuild is a bit faster than vite so might be worth it for larger applications or places you want to get the most performance.

## Setup

First you need to clone the repo

```bash
git clone git@github.com:jamalsoueidan/tauri-rsbuild-react-module-federation.git
```

Then you can use your respective package manager

```bash
pnpm install
```

Then run the application

```bash
cd app
pnpm run dev
```

```bash
cd host
pnpm run tauri dev
```

This will launch both the remote app and desktop app, and HMR is working!
