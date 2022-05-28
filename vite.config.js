import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'


export default defineConfig({
  resolve: {
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: { 
      '@': resolve(__dirname, 'src'),
      "~/": `${resolve(__dirname, "src")}/`,
     }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          '@/utils/message': ['messages']
        }
      ],
      // resolvers: [ElementPlusResolver()],
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
      dts: true, //auto gen
    }),

    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
          // exclude: /^[^El]/
        })
      ]
    }),

    //  Components({
    //   // resolvers: [
    //   //   (name) => {
    //   //     console.log('name: ---', name);
    //   //     // where `name` is always CapitalCase
    //   //     if (name.startsWith('El'))
    //   //       return { importName: name, path: 'element-plus/es', importStyle: 'sass', }
    //   //   }
    //   // ],
    //   dts: true,
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: 'sass',
    //     }),
    //   ],
    // }),

    // Components({
    //   dts: true, // e
    //   resolvers: [
    //     // ElementPlusResolver({
    //     //   // importStyle: "scss",
    //     //   // directives: true,
    //     //   // version: "2.0.1",
    //     //   // version: await getPkgVersion('element-plus', '1.1.0-beta.21'),
    //     // }),
    //     ElementPlusResolver()
    //   ],
    // }),

    // ElementPlus({
    //   useSource: true,
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
        // additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
