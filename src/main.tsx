/* 应用入口文件，渲染根组件并挂载到 DOM喵 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'

/**
 * 获取根 DOM 节点喵
 */
const rootElement = document.getElementById('root')

/**
 * 确保根节点存在后渲染应用喵
 */
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
} else {
  console.error('找不到根元素 #root，无法挂载应用喵~')
}
