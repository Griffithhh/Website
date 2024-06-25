import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/assets/', // Устанавливает базовый путь для всех статических ресурсов
    outDir: 'dist', // Папка, в которую будет собран проект
    assetsDir: 'assets', // Подпапка для статических ресурсов (может не совпадать с base)
    // Другие настройки сборки...
  },
});