import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  build: { format: "preserve" },
  vite: { plugins: [tailwindcss()] },
  site: "https://yt.rman.dev",
});
