import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // listen on all interfaces (IPv6 any). Keep this so local network and container hosts work.
    host: "::",
    port: 8080,
    // set the origin used by Vite when constructing absolute URLs (useful for preview/deploy)
    origin: "https://suitable-helpers-hub-09735.onrender.com",
  },
  // preview server options (used by `vite preview`) — expose host used on Render
  preview: {
    host: "suitable-helpers-hub-09735.onrender.com",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
