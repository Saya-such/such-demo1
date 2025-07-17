// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // ...
  // base: process.env.TARGET === "gh-pages" ? "/such-demo1/" : "/",
  base: "/",
  build: {
    assetsPrefix: "./",
  },
  output: "static",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
