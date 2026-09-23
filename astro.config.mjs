import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', devToolbar: { enabled: false }, base: process.env.BASE_PATH || '/', site: process.env.SITE_URL || undefined });
