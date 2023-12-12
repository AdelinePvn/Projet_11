import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), svgrPlugin()
    ],
    build: {
        rollupOptions: {
            input: "src/index.html",
        }
    }
});