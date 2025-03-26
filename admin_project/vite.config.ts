import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//svg矢量图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({command}) =>{
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),

      viteMockServe({
        enable: command === 'serve',//开发环境时使用mock
        logger: true,     // 是否在控制台显示请求日志
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@use "./src/styles/variable.scss" as variable;',
          quietDeps: true, // 添加 quietDeps 选项，静默依赖警告
        },
      },
    },
  }
})
