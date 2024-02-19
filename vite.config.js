import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/vite-portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "/pages/about.html"),
        todo: resolve(__dirname, "/pages/todo.html"),
        posts: resolve(__dirname, "/pages/post.html"),
      },
    },
  },
});
