// @ts-nocheck
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

//開発モードか公開用(GitHub Pages)か判別
const isGhPages = process.env.DEPLOY_ENV === "gh-pages";

export default defineConfig({
  base: "/such-demo1/",

  build: {
    assetsPrefix: "./",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `_astro/[hash].js`,
          chunkFileNames: `_astro/[hash].js`,
          assetFileNames: (assetInfo) => {
            // 画像はimagesフォルダへ(それ以外は_astroフォルダへ)
            if (
              /\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(assetInfo.name ?? "")
            ) {
              return "images/[name].[hash][extname]";
            }
            return "_astro/[name].[hash][extname]";
          },
        },
      },
    },
  },

  site: "https://saya-such.github.io/such-demo1/",
  integrations: [sitemap()],
});
