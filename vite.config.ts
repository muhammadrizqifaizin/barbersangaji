import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  // Use /sangaji/ base only in production, leave it as / for local dev
  base: process.env.NODE_ENV === 'production' ? '/sangaji/' : '/',
})