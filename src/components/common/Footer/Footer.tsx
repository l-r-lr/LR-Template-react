/* 页脚组件 - 显示版权信息和备案号喵 */
import React from 'react'
import styles from './Footer.module.scss'

/**
 * 页脚组件属性接口喵
 */
export interface FooterProps {
  /** 备案号 */
  icp?: string
  /** 版权所有者 */
  copyright?: string
}

/**
 * 获取当前年份喵
 * @returns 当前年份
 */
const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * 页脚组件喵
 * @param props 组件属性
 * @returns 页脚组件
 * @example
 * <Footer icp="京ICP备12345678号" copyright="LR小さな狐の妖精喵" />
 */
export const Footer: React.FC<FooterProps> = ({
  icp,
  copyright = 'LR小さな狐の妖精喵',
}) => {
  const currentYear = getCurrentYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <span>© {currentYear} {copyright}</span>
          <span className={styles.divider}>·</span>
          <span>All rights reserved</span>
        </div>
        {icp && (
          <div className={styles.icp}>
            <span>{icp}</span>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
