import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'], // Se não tiver app.css, deixe apenas o app.js
            refresh: true,
        }),
    ],
});