/* 模态框组件，支持自定义标题、内容和底部操作区喵 */
import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import styles from './Modal.module.scss'

/**
 * 模态框尺寸类型喵
 */
type ModalSize = 'small' | 'medium' | 'large'

/**
 * 模态框组件属性接口喵
 */
export interface ModalProps {
  /** 是否显示模态框 */
  isOpen: boolean
  /** 关闭回调函数 */
  onClose: () => void
  /** 模态框标题 */
  title?: React.ReactNode
  /** 模态框内容 */
  children: React.ReactNode
  /** 底部操作区内容 */
  footer?: React.ReactNode
  /** 模态框尺寸，默认为 medium */
  size?: ModalSize
  /** 点击遮罩层是否关闭，默认为 true */
  closeOnOverlayClick?: boolean
  /** 按 ESC 键是否关闭，默认为 true */
  closeOnEsc?: boolean
}

/**
 * 模态框组件喵
 * @param props 模态框属性
 * @returns 模态框组件
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(isOpen)

  /**
   * 处理关闭动画喵
   */
  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 200)
  }, [onClose])

  /**
   * 处理遮罩层点击喵
   * @param e 鼠标事件
   */
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      handleClose()
    }
  }

  /**
   * 监听 ESC 键关闭喵
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeOnEsc, handleClose])

  /**
   * 控制渲染状态喵
   */
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    } else {
      setShouldRender(false)
    }
  }, [isOpen])

  if (!shouldRender) return null

  const modalContent = (
    <div
      className={`${styles.overlay} ${styles[size]} ${isClosing ? styles.closing : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.content}>
        {title && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="关闭"
            >
              <X size={18} />
            </button>
          </div>
        )}
        
        <div className={styles.body}>{children}</div>
        
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default Modal
