import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // You may be using swc (faster) or the regular react plugin
import path from "path";
import { componentTagger } from "lovable-tagger";

// NOTE: You are using the functional configuration to check the 'mode' for the componentTagger.
// This is the correct structure to follow.

export default defineConfig(({ mode }) => ({
  // 1. GITHUB PAGES BASE PATH FIX
  // This is the most crucial setting for deployment to https://<user>.github.io/GMU_CODING_CLUB_FINAL/
  base: '/GMU_CODING_CLUB_FINAL/', 
  
  // 2. DEVELOPMENT SERVER SETTINGS
  server: {
    host: "::",
    port: 8080,
  },
  
  // 3. PLUGINS (Including conditional one)
  plugins: [
    // Use either 'react' or 'react-swc' from your imports, but not both.
    // Assuming you want the one with 'swc' as it was first.
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  // 4. ALIAS/RESOLVE SETTINGS
  resolve: {
    alias: {
      // Allows using imports like `import Component from "@/components/..."`
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
