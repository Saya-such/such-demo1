// @ts-nocheck
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

//開発モードか公開用(GitHub Pages)か判別
const isGhPages = process.env.DEPLOY_ENV === "gh-pages";

export default defineConfig({
  base: isGhPages ? "/such-demo1/" : "",
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
            // 画像はimagesフォルダへ
            if (
              /\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(assetInfo.name ?? "")
            ) {
              return "images/[name].[hash][extname]";
            }
            // 画像以外(css/jsなど)は_astroフォルダへ
            return "_astro/[name].[hash][extname]";
          },
        },
      },
    },
  },
});
