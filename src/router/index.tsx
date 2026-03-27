/* 路由配置文件，定义应用的所有路由喵 */
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Docs } from '@/pages/Docs'
import { NotFound } from '@/pages/NotFound'

/**
 * 路由配置数组喵
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'docs',
        element: <Docs />,
      },
      // 404 页面
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

/**
 * 创建路由实例喵
 */
export const router = createBrowserRouter(routes)

export default router
