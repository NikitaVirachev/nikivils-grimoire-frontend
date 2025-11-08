import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      proxy: {
        '/api': {
          target: `http://localhost:${env.BACK_PORT || 3000}`,
          changeOrigin: true,
          secure: true,
          ws: true,
        },
      },
    },
  };
});
