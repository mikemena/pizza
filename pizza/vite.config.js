import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import prettierPlugin from 'vite-plugin-prettier';
import open from 'open';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), prettierPlugin()],
  server: {
    configResolved(config) {
      if (config.command === 'serve' && config.mode === 'development') {
        setTimeout(() => {
          open('http://localhost:3000', { app: { name: open.apps.chrome } });
        }, 1000); // Adjust the delay as needed
      }
    },
  },
});
