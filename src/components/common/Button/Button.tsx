/* Button 组件 - 平面设计风格，支持多种变体和尺寸喵 */
import React from 'react'
import styles from './Button.module.scss'

/**
 * 按钮变体类型喵
 */
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

/**
 * 按钮尺寸类型喵
 */
type ButtonSize = 'small' | 'medium' | 'large'

/**
 * 按钮组件属性接口喵
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 按钮变体，默认为 primary */
  variant?: ButtonVariant
  /** 按钮尺寸，默认为 medium */
  size?: ButtonSize
  /** 是否全宽显示 */
  fullWidth?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 子元素 */
  children: React.ReactNode
}

/**
 * 通用按钮组件喵
 * @param props 按钮属性
 * @returns 按钮组件
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled,
  children,
  className,
  ...rest
}) => {
  /**
   * 组合类名函数喵
   * @returns 组合后的类名字符串
   */
  const getClassNames = (): string => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
    ]

    if (fullWidth) {
      classNames.push(styles.fullWidth)
    }

    if (loading) {
      classNames.push(styles.loading)
    }

    if (className) {
      classNames.push(className)
    }

    return classNames.join(' ')
  }

  return (
    <button
      className={getClassNames()}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
