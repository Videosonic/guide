import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  base: './',
  root,
  server: {
    port: '3000',
    open: true | 'dist/index.html',
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        markup_guide: resolve(__dirname, 'src/markup-guide/index.html'),
        wp_folder: resolve(__dirname, 'src/wp-folder/index.html'),
        css_design: resolve(__dirname, 'src/css-design/index.html'),
        //404: resolve(__dirname, 'src/404.html'),
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/img/[name].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    },
  },
})