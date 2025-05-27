import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';

     export default defineConfig({
       plugins: [react()],
       build: {
         assetsInclude: ['**/*.jsx', '**/*.css'],
         outDir: 'dist',
         emptyOutDir: true,
       },
     });