import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/vite-portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/contact.html"),
      },
    },
  },
});
