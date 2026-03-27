/* 通用卡片组件，支持标题、副标题、内容和操作区喵 */
import React from 'react'
import styles from './Card.module.scss'

/**
 * 卡片变体类型喵
 */
type CardVariant = 'default' | 'outlined' | 'elevated'

/**
 * 卡片内边距类型喵
 */
type CardPadding = 'small' | 'medium' | 'large'

/**
 * 卡片组件属性接口喵
 */
export interface CardProps {
  /** 卡片变体，默认为 default */
  variant?: CardVariant
  /** 内边距大小，默认为 medium */
  padding?: CardPadding
  /** 卡片标题 */
  title?: React.ReactNode
  /** 卡片副标题 */
  subtitle?: React.ReactNode
  /** 卡片内容 */
  children: React.ReactNode
  /** 底部操作区内容 */
  footer?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: () => void
}

/**
 * 通用卡片组件喵
 * @param props 卡片属性
 * @returns 卡片组件
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'medium',
  title,
  subtitle,
  children,
  footer,
  className,
  onClick,
}) => {
  /**
   * 组合类名函数喵
   * @returns 组合后的类名字符串
   */
  const getClassNames = (): string => {
    const classNames = [
      styles.card,
      styles[variant],
      styles[`padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
    ]

    if (className) {
      classNames.push(className)
    }

    return classNames.join(' ')
  }

  return (
    <div className={getClassNames()} onClick={onClick}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      
      <div className={styles.content}>{children}</div>
      
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}

export default Card
