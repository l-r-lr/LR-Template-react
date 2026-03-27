/* Home 页面 -LR设计，使用 Lucide 图标喵 */
import React, { useState } from 'react'
import {
  Zap,
  FileCode,
  Palette,
  Wrench,
  Sun,
  Moon,
  Monitor,
  Atom,
  Paintbrush,
  Box,
} from 'lucide-react'
import styles from './Home.module.scss'
import { Button, Card, Modal, Avatar } from '@/components/common'
import { useToggle } from '@/hooks'
import { useThemeStore } from '@/stores'

/**
 * 统计卡片数据喵
 */
const statItems = [
  { icon: <Zap size={28} />, label: '极速构建' },
  { icon: <FileCode size={28} />, label: '类型安全' },
  { icon: <Palette size={28} />, label: '单色设计' },
  { icon: <Wrench size={28} />, label: '开箱即用' },
]

/**
 * 主题配置喵
 */
const themeConfigs = [
  { key: 'light', label: '亮色', icon: <Sun size={16} /> },
  { key: 'dark', label: '暗色', icon: <Moon size={16} /> },
  { key: 'system', label: '跟随系统', icon: <Monitor size={16} /> },
] as const

/**
 * 首页组件喵
 * @returns 首页组件
 */
export const Home: React.FC = () => {
  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useToggle(false)
  const [count, setCount] = useState(0)
  const { theme, setTheme } = useThemeStore()

  return (
    <div className={styles.container}>
      {/* 技术栈展示区域 - 占据屏幕 5% 高度 */}
      <section className={styles.techStackHero}>
        <div className={styles.techStackContent}>
          <h2 className={styles.techStackTitle}>技术栈</h2>
          <div className={styles.techStackItems}>
            <div className={styles.techStackItem}>
              <Zap size={20} />
              <span>Vite</span>
            </div>
            <span className={styles.techDivider}>·</span>
            <div className={styles.techStackItem}>
              <Atom size={20} />
              <span>React 19</span>
            </div>
            <span className={styles.techDivider}>·</span>
            <div className={styles.techStackItem}>
              <FileCode size={20} />
              <span>TypeScript</span>
            </div>
            <span className={styles.techDivider}>·</span>
            <div className={styles.techStackItem}>
              <Paintbrush size={20} />
              <span>SCSS</span>
            </div>
            <span className={styles.techDivider}>·</span>
            <div className={styles.techStackItem}>
              <Box size={20} />
              <span>CSS Modules</span>
            </div>
          </div>
        </div>
      </section>

      <header className={styles.header}>
        <h1 className={styles.title}>LR-Template</h1>
        <p className={styles.subtitle}>React + TypeScript + Vite 前端模板</p>
      </header>

      {/* 主题切换 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>主题切换</h2>
        <div className={styles.themeToggle}>
          {themeConfigs.map((t) => (
            <button
              key={t.key}
              className={`${styles.themeButton} ${theme === t.key ? styles.active : ''}`}
              onClick={() => setTheme(t.key)}
            >
              <span className={styles.themeIcon}>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 统计卡片 */}
      <div className={styles.stats}>
        {statItems.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statValue}>{item.icon}</div>
            <div className={styles.statLabel}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* 按钮组件演示 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Button 组件</h2>
        <Card variant="elevated">
          <div className={styles.demoArea}>
            <Button variant="primary" onClick={() => setCount(c => c + 1)}>
              点击: {count}
            </Button>
            <Button variant="secondary">次要</Button>
            <Button variant="ghost">幽灵</Button>
            <Button variant="danger">危险</Button>
            <Button size="small">小</Button>
            <Button size="large">大</Button>
            <Button loading>加载</Button>
          </div>
        </Card>
      </section>

      {/* 卡片组件演示 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Card 组件</h2>
        <div className={styles.cardGrid}>
          <Card title="边框卡片" subtitle="使用边框定义边界">
            <p>这是默认变体的卡片，使用边框来定义边界，无阴影。</p>
          </Card>
          <Card variant="outlined" title="轮廓卡片" subtitle="透明背景">
            <p>这是轮廓变体的卡片，背景透明，适合在有色背景上使用。</p>
          </Card>
          <Card variant="elevated" title="阴影卡片" subtitle="复杂打光阴影">
            <p>这是阴影变体的卡片，使用多层阴影模拟自然光照效果。</p>
          </Card>
        </div>
      </section>

      {/* 模态框演示 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Modal 组件</h2>
        <Card>
          <div className={styles.demoArea}>
            <Button onClick={openModal}>打开模态框</Button>
          </div>
        </Card>
      </section>

      {/* 头像组件演示 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Avatar 组件</h2>

        <Card variant="elevated" className={styles.avatarCard}>
          <div className={styles.avatarSection}>
            <h3 className={styles.avatarTitle}>图片头像（我的头像）</h3>
            <div className={styles.avatarRow}>
              <Avatar size="xs" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
              <Avatar size="sm" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
              <Avatar size="md" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
              <Avatar size="lg" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
              <Avatar size="xl" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
              <Avatar size="2xl" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="LR" />
            </div>
          </div>

          <div className={styles.avatarSection}>
            <h3 className={styles.avatarTitle}>文字头像</h3>
            <div className={styles.avatarRow}>
              <Avatar size="md" color="default">LR</Avatar>
              <Avatar size="md" color="primary">LR</Avatar>
              <Avatar size="md" color="secondary">LR</Avatar>
              <Avatar size="md" color="success">LR</Avatar>
              <Avatar size="md" color="warning">LR</Avatar>
              <Avatar size="md" color="danger">LR</Avatar>
            </div>
          </div>

          <div className={styles.avatarSection}>
            <h3 className={styles.avatarTitle}>不同形状</h3>
            <div className={styles.avatarRow}>
              <Avatar size="lg" shape="circle" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="圆形" />
              <Avatar size="lg" shape="rounded" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="圆角" />
              <Avatar size="lg" shape="square" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" alt="方形" />
              <Avatar size="lg" shape="circle" color="primary">LR</Avatar>
              <Avatar size="lg" shape="rounded" color="primary">LR</Avatar>
              <Avatar size="lg" shape="square" color="primary">LR</Avatar>
            </div>
          </div>

          <div className={styles.avatarSection}>
            <h3 className={styles.avatarTitle}>可点击头像</h3>
            <div className={styles.avatarRow}>
              <Avatar size="xl" src="https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg" onClick={() => alert('点击了头像！')} />
              <Avatar size="xl" color="primary" onClick={() => alert('点击了文字头像！')}>点击</Avatar>
            </div>
          </div>
        </Card>
      </section>

      {/* 模态框 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="单色设计风格"
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              取消
            </Button>
            <Button onClick={closeModal}>确认</Button>
          </>
        }
      >
        <p>这是一个采用单色设计风格的模态框。</p>
        <p>设计特点：</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyle: 'disc' }}>
          <li>黑白灰单色配色</li>
          <li>复杂多层打光阴影</li>
          <li>无边框悬浮动画</li>
          <li>平滑过渡效果</li>
        </ul>
      </Modal>
    </div>
  )
}

export default Home
