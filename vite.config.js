import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.tsx'],
            ssr:  'resources/js/ssr.tsx',
            refresh: true,
        }),
        compression(),
        react(),
    ],
     ssr: {
        noExternal: true
     }
});
