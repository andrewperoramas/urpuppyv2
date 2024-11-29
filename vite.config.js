import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
  include: [
    'react',
    'react-dom',
    '@inertiajs/react',
    '@inertiajs/server',
    '@inertiajs/core',
  ]
},
     ssr: {
        noExternal: true
     }
});