import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or another framework plugin if you are not using React

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
