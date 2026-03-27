/* 404 页面 - 页面未找到喵 */
import React from 'react'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.scss'
import { Button, Card } from '@/components/common'
import { useNavigate } from 'react-router-dom'

/**
 * 404 页面组件喵
 * @returns 404 页面组件
 */
export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  /**
   * 返回上一页喵
   */
  const handleGoBack = () => {
    navigate(-1)
  }

  /**
   * 返回首页喵
   */
  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <Card variant="elevated" className={styles.card}>
        <div className={styles.icon}>
          <FileQuestion size={64} />
        </div>
        
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>页面未找到</p>
        
        <p className={styles.description}>
          抱歉，您访问的页面不存在或已被移除。
        </p>

        <div className={styles.actions}>
          <Button variant="secondary" onClick={handleGoBack}>
            <ArrowLeft size={16} />
            返回上一页
          </Button>
          <Button onClick={handleGoHome}>
            <Home size={16} />
            返回首页
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default NotFound
