import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'public/assets',
        emptyOutDir: true,
        manifest: true,
    },
    publicDir: 'fake_dir',
    // 라라벨에서 이미 public 디렉토리를 사용하므로 충돌을 피하기 위해 가짜 경로를 설정합니다.
});
