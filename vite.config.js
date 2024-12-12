import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.tsx'],
            ssr:  'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
     ssr: {
        noExternal: true
     }
});
