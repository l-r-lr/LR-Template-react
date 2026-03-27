/* 应用全局状态管理 Store，使用 Zustand 实现喵 */
import { create } from 'zustand'

/**
 * 主题类型喵
 */
type Theme = 'light' | 'dark' | 'system'

/**
 * 应用状态接口喵
 */
interface AppState {
  /** 当前主题 */
  theme: Theme
  /** 侧边栏是否折叠 */
  sidebarCollapsed: boolean
  /** 全局加载状态 */
  globalLoading: boolean
  /** 错误信息 */
  error: string | null
}

/**
 * 应用状态操作接口喵
 */
interface AppActions {
  /** 设置主题 */
  setTheme: (theme: Theme) => void
  /** 切换侧边栏折叠状态 */
  toggleSidebar: () => void
  /** 设置侧边栏折叠状态 */
  setSidebarCollapsed: (collapsed: boolean) => void
  /** 设置全局加载状态 */
  setGlobalLoading: (loading: boolean) => void
  /** 设置错误信息 */
  setError: (error: string | null) => void
  /** 清除错误信息 */
  clearError: () => void
}

/**
 * 应用状态 Store喵
 */
export const useAppStore = create<AppState & AppActions>()((set) => ({
  // 初始状态
  theme: 'light',
  sidebarCollapsed: false,
  globalLoading: false,
  error: null,

  /**
   * 设置主题喵
   * @param theme 主题类型
   */
  setTheme: (theme) => set({ theme }),

  /**
   * 切换侧边栏折叠状态喵
   */
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

  /**
   * 设置侧边栏折叠状态喵
   * @param collapsed 是否折叠
   */
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

  /**
   * 设置全局加载状态喵
   * @param loading 是否加载中
   */
  setGlobalLoading: (loading) => set({ globalLoading: loading }),

  /**
   * 设置错误信息喵
   * @param error 错误信息
   */
  setError: (error) => set({ error }),

  /**
   * 清除错误信息喵
   */
  clearError: () => set({ error: null }),
}))

export default useAppStore
