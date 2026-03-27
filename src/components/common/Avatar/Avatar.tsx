/* 头像组件 - 支持图片头像和文字头像喵 */
import React from 'react'
import styles from './Avatar.module.scss'

/**
 * 头像尺寸类型喵
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * 头像形状类型喵
 */
export type AvatarShape = 'circle' | 'square' | 'rounded'

/**
 * 头像颜色主题喵
 */
export type AvatarColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

/**
 * 头像组件属性接口喵
 */
interface AvatarBaseProps {
  /** 尺寸 */
  size?: AvatarSize
  /** 形状 */
  shape?: AvatarShape
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: () => void
}

/**
 * 图片头像属性喵
 */
interface ImageAvatarProps extends AvatarBaseProps {
  /** 头像图片地址 */
  src: string
  /** 图片替代文本 */
  alt?: string
  /** 文字内容（不传则为图片头像） */
  children?: never
}

/**
 * 文字头像属性喵
 */
interface TextAvatarProps extends AvatarBaseProps {
  /** 文字内容（传入则为文字头像） */
  children: string
  /** 背景颜色主题 */
  color?: AvatarColor
  /** 图片地址（不传则为文字头像） */
  src?: never
}

/**
 * 头像组件属性联合类型喵
 */
export type AvatarProps = ImageAvatarProps | TextAvatarProps

/**
 * 尺寸对应的像素值喵
 */
const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80,
}

/**
 * 获取文字头像显示内容喵
 * 优先取第一个字符，如果包含空格则取首字母缩写
 * @param text 文字内容
 * @returns 显示的文字
 */
const getDisplayText = (text: string): string => {
  if (!text) return ''
  const trimmed = text.trim()
  if (trimmed.includes(' ')) {
    return trimmed
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  return trimmed[0].toUpperCase()
}

/**
 * 头像组件喵
 * @param props 组件属性
 * @returns 头像组件
 * @example
 * // 图片头像
 * <Avatar src="https://example.com/avatar.jpg" alt="用户名" size="md" />
 *
 * // 文字头像
 * <Avatar size="lg" color="primary">LR</Avatar>
 *
 * // 不同形状
 * <Avatar shape="circle" src="avatar.jpg" /> // 圆形（默认）
 * <Avatar shape="square" src="avatar.jpg" /> // 方形
 * <Avatar shape="rounded" src="avatar.jpg" /> // 圆角方形
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  shape = 'circle',
  className = '',
  onClick,
  ...props
}) => {
  const sizeValue = sizeMap[size]
  const isClickable = !!onClick

  // 判断是图片头像还是文字头像
  const isImageAvatar = 'src' in props && props.src

  const avatarClassName = [
    styles.avatar,
    styles[size],
    styles[shape],
    isImageAvatar ? styles.imageAvatar : styles.textAvatar,
    isClickable ? styles.clickable : '',
    className,
  ].join(' ')

  const style: React.CSSProperties = {
    width: sizeValue,
    height: sizeValue,
  }

  // 图片头像
  if (isImageAvatar) {
    const { src, alt } = props as ImageAvatarProps
    return (
      <img
        src={src}
        alt={alt || '头像'}
        className={avatarClassName}
        style={style}
        onClick={onClick}
      />
    )
  }

  // 文字头像
  const { children, color = 'default' } = props as TextAvatarProps
  const displayText = getDisplayText(children)

  return (
    <div
      className={`${avatarClassName} ${styles[color]}`}
      style={style}
      onClick={onClick}
      role="img"
      aria-label={children}
    >
      <span className={styles.text}>{displayText}</span>
    </div>
  )
}

export default Avatar
