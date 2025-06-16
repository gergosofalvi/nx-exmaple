# Nx Monorepo Setup with Two Next.js Apps and a Shared Button Library

This guide explains how to set up an Nx workspace, create two independent Next.js applications, and a shared UI button library. It also covers troubleshooting steps for common issues.

---

## 1. Install Nx CLI Globally

```sh
npm add --global nx
```

Reference: [Nx Installation Guide](https://nx.dev/getting-started/installation)

---

## 2. Initialize the Nx Workspace

```sh
nx init
```

Follow the prompts. This will set up the basic Nx configuration files.

---

## 3. Install the Next.js Plugin

If you want to use Next.js, you need to install the plugin:

```sh
npm install --save-dev @nx/next
```

If you encounter a permissions error (EACCES) with npm, fix it by running:

```sh
sudo chown -R $(whoami) ~/.npm
```

Then try the install command again.

---

## 4. Create Two Next.js Applications

```sh
nx g @nx/next:app project1
nx g @nx/next:app project2
```

---

## 5. Create a Shared UI Button Library

```sh
nx g @nx/react:lib ui-button
```

---

## 6. Implement a Fancy Button Component

Edit `libs/ui-button/src/lib/ui-button.tsx`:

```tsx
import React from 'react';
import './ui-button.module.css';

export interface UiButtonProps {
  text: string;
}

export function UiButton({ text }: UiButtonProps) {
  return (
    <button className="fancy-button">
      {text}
    </button>
  );
}

export default UiButton;
```

Edit `libs/ui-button/src/lib/ui-button.module.css`:

```css
.fancy-button {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 14px rgba(229,46,113,0.2);
  cursor: pointer;
  transition: transform 0.1s;
}
.fancy-button:hover {
  transform: scale(1.05);
}
```

---

## 7. Use the Button in Both Apps

In `apps/project1/pages/index.tsx`:

```tsx
import UiButton from '@your-workspace/ui-button';

export default function Index() {
  return <UiButton text="project1" />;
}
```

In `apps/project2/pages/index.tsx`:

```tsx
import UiButton from '@your-workspace/ui-button';

export default function Index() {
  return <UiButton text="project2" />;
}
```

Replace `@your-workspace/ui-button` with your actual workspace name (see `package.json` for the correct scope).

---

## 8. Run the Applications

```sh
nx serve project1
nx serve project2
```

---

## 9. Troubleshooting

- If you see `Unable to resolve @nx/next:app` or missing `tsconfig.base.json`, create a `tsconfig.base.json` in the root with basic TypeScript config.
- If you get npm permission errors, fix with `sudo chown -R $(whoami) ~/.npm`.

---

## 10. Running and Building the Projects

### Development Mode (Start Dev Server)

To start the development server for each app, run:

```sh
nx serve project1
```

```sh
nx serve project2
```

#### If you get the error:
```
NX   Cannot find configuration for task project1:serve
```
This means the `serve` target is not configured for your project. In this case, try:

```sh
nx dev project1
```

```sh
nx dev project2
```

If this still does not work, check your `project.json` for each app to ensure there is a `dev` or `serve` target. If missing, reinstall the Next.js plugin:

```sh
npm install --save-dev @nx/next
```

And re-generate the Next.js app if needed.

---

### Production Build

To create a production build for each app, run:

```sh
nx build project1
```

```sh
nx build project2
```

---

### Troubleshooting
- If you see `Cannot find configuration for task project1:serve`, use `nx dev project1` instead.
- If neither works, check your `project.json` for the correct targets or reinstall the Next.js plugin.
- Always run these commands from the workspace root.

---

## References
- [Nx Getting Started](https://nx.dev/getting-started/installation) 