import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Reemplaza con tu dominio real
  site: 'https://experimentar.eu', 
  integrations: [tailwind()],
});