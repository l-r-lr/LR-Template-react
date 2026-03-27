/* Vite 配置文件，配置项目构建选项和插件喵 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // CSS Modules 配置，生成驼峰命名格式的类名喵
      localsConvention: 'camelCaseOnly',
      // 生成带有哈希的类名，格式：文件名_类名_哈希喵
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        // SCSS 全局变量或配置可在此添加喵
        additionalData: '',
      },
    },
  },
  resolve: {
    alias: {
      // 配置路径别名，方便导入喵
      '@': path.resolve(__dirname, './src'),
    },
  },
})
