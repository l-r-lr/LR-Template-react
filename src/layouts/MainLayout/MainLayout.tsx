/* MainLayout 组件 -LR设计，使用 Lucide 图标喵 */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Home, Info, Menu, X, Zap, BookOpen, Sun, Moon, Monitor } from 'lucide-react'
import styles from './MainLayout.module.scss'
import { useAppStore } from '@/stores'
import { useThemeStore } from '@/stores'
import { Footer } from '@/components/common'

/**
 * 导航项接口喵
 */
interface NavItem {
  /** 路由路径 */
  path: string
  /** 显示名称 */
  label: string
  /** Lucide 图标组件 */
  icon: React.ReactNode
}

/**
 * 导航配置数组喵
 */
const navItems: NavItem[] = [
  { path: '/', label: '首页', icon: <Home size={18} strokeWidth={2} /> },
  { path: '/docs', label: '文档', icon: <BookOpen size={18} strokeWidth={2} /> },
  { path: '/about', label: '关于', icon: <Info size={18} strokeWidth={2} /> },
]

/**
 * 主题图标映射喵
 */
const themeIcons = {
  light: <Sun size={18} />,
  dark: <Moon size={18} />,
  system: <Monitor size={18} />,
}

/**
 * 主布局组件喵
 * @returns 布局组件
 */
export const MainLayout: React.FC = () => {
  const { sidebarCollapsed, toggleSidebar } = useAppStore()
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className={styles.layout}>
      {/* 头部导航 */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img 
            src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" 
            alt="LR" 
            className={styles.logoAvatar}
          />
          <span>LR-Template</span>
        </div>

        <div className={styles.actions}>
          {/* 主题切换按钮 */}
          <button
            className={styles.themeButton}
            onClick={toggleTheme}
            aria-label="切换主题"
            title={`当前主题: ${theme === 'light' ? '亮色' : theme === 'dark' ? '暗色' : '跟随系统'}`}
          >
            {themeIcons[theme]}
          </button>
        </div>
      </header>

      {/* 主体区域 */}
      <div className={styles.body}>
        {/* 侧边栏 */}
        <aside
          className={`${styles.sidebar} ${sidebarCollapsed ? styles.sidebarCollapsed : ''}`}
        >
          {/* 侧边栏切换按钮 */}
          <button
            className={styles.sidebarToggle}
            onClick={toggleSidebar}
            aria-label={sidebarCollapsed ? '展开菜单' : '收起菜单'}
          >
            {sidebarCollapsed ? <Menu size={16} /> : <X size={16} />}
          </button>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
                }
                end={item.path === '/'}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {!sidebarCollapsed && (
                  <span className={styles.navText}>{item.label}</span>
                )}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* 主内容区 */}
        <main 
          className={`${styles.main} ${sidebarCollapsed ? styles.mainCollapsed : ''}`}
        >
          <div className={styles.mainContent}>
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
