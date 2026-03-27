/* 主题管理 Store，负责主题状态的持久化存储和管理喵 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * 主题类型定义喵
 */
export type Theme = 'light' | 'dark' | 'system'

/**
 * 主题状态接口喵
 */
interface ThemeState {
  /** 当前主题 */
  theme: Theme
  /** 设置主题 */
  setTheme: (theme: Theme) => void
  /** 切换主题（循环切换 light -> dark -> system -> light） */
  toggleTheme: () => void
}

/**
 * 应用主题到 DOM 喵
 * @param theme 主题类型
 */
export const applyTheme = (theme: Theme): void => {
  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

/**
 * 获取系统主题偏好喵
 * @returns 系统主题 'light' 或 'dark'
 */
export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * 主题管理 Store喵
 * 使用 Zustand + persist 中间件实现 localStorage 持久化
 * @example
 * const { theme, setTheme, toggleTheme } = useThemeStore()
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',

      setTheme: (theme) => {
        set({ theme })
        applyTheme(theme)
      },

      toggleTheme: () => {
        const { theme } = get()
        const themes: Theme[] = ['light', 'dark', 'system']
        const currentIndex = themes.indexOf(theme)
        const nextTheme = themes[(currentIndex + 1) % themes.length]
        set({ theme: nextTheme })
        applyTheme(nextTheme)
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // 持久化存储恢复后，应用保存的主题
        if (state) {
          applyTheme(state.theme)
        }
      },
    }
  )
)

export default useThemeStore
