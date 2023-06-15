import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 尤大推荐的神器unplugin-vue-components,解放双手!以后再也不用呆呆的手动引入(组件,ui(Element-ui)库,vue hooks等)
// https://juejin.cn/post/7012446423367024676

import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

console.log('cwd: ', process.cwd());
export default defineConfig({
  resolve: {
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
      "~/": `${resolve(__dirname, "src")}/`,
    }
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 3001,
  //   strictPort: true,
  // },
  plugins: [
    vue(),
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
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
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // 配置文件生成位置
      // dts: 'src/components.d.ts'
      dts: true,
      // ui库解析器
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
