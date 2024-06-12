import { defineConfig } from 'vite';
// import { createVuePlugin } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  optimizeDeps: {
    include: [
      '@jiaminghi/c-render',
      '@jiaminghi/c-render/lib/plugin/util',
      '@jiaminghi/charts/lib/util/index',
      '@jiaminghi/charts/lib/util',
      '@jiaminghi/charts/lib/extend/index',
      '@jiaminghi/charts',
      '@jiaminghi/color'
    ]
  },
  server: {
    host: '0.0.0.0',
    prot: 3000,
    open: true
  }
});
