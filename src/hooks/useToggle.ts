/* 布尔值切换 Hook，用于处理开关状态喵 */
import { useState, useCallback } from 'react'

/**
 * useToggle Hook 的返回值类型喵
 */
interface UseToggleReturn {
  /** 当前布尔值状态 */
  value: boolean
  /** 切换状态（取反） */
  toggle: () => void
  /** 设置为 true */
  setTrue: () => void
  /** 设置为 false */
  setFalse: () => void
  /** 手动设置值 */
  setValue: (value: boolean) => void
}

/**
 * 布尔值切换 Hook喵
 * @param defaultValue 默认值，默认为 false
 * @returns 状态值和操作函数
 * @example
 * const { value, toggle, setTrue, setFalse } = useToggle(false)
 */
export const useToggle = (defaultValue: boolean = false): UseToggleReturn => {
  const [value, setValue] = useState<boolean>(defaultValue)

  /**
   * 切换布尔值状态喵
   */
  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  /**
   * 设置为 true喵
   */
  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  /**
   * 设置为 false喵
   */
  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  }
}

export default useToggle
