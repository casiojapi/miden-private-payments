import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose on all interfaces
    port: 3000,
    hmr: {
      clientPort: 443, // Ensure HMR works with Ngrok HTTPS
    },
  },
});









