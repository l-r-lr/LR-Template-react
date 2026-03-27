/* About 页面 -LR设计，使用 Lucide 图标喵 */
import React from 'react'
import {
  Zap,
  Atom,
  FileCode,
  Palette,
  Lock,
  Package,
  TrafficCone,
  Sparkles,
  Minimize2,
  Layers,
  Sun,
  Grid3X3,
  User,
  ExternalLink,
  AlertTriangle,
  MessageCircle,
  Coffee,
} from 'lucide-react'
import styles from './About.module.scss'
import { Card } from '@/components/common'

/**
 * 技术栈项接口喵
 */
interface TechItem {
  icon: React.ReactNode
  name: string
  description: string
}

/**
 * 技术栈数据喵
 */
const techStack: TechItem[] = [
  { icon: <Zap size={20} />, name: 'Vite', description: '下一代构建工具' },
  { icon: <Atom size={20} />, name: 'React 19', description: '声明式 UI 库' },
  { icon: <FileCode size={20} />, name: 'TypeScript', description: '类型安全' },
  { icon: <Palette size={20} />, name: 'SCSS', description: 'CSS 预处理器' },
  { icon: <Lock size={20} />, name: 'CSS Modules', description: '样式隔离' },
  { icon: <Package size={20} />, name: 'Zustand', description: '轻量状态管理' },
  { icon: <TrafficCone size={20} />, name: 'React Router', description: '路由管理' },
  { icon: <Sparkles size={20} />, name: 'ESLint', description: '代码质量' },
]

/**
 * 设计原则数据喵
 */
const principles = [
  {
    title: '单色设计',
    desc: '仅使用黑白灰，去除所有彩色干扰',
    icon: <Minimize2 size={20} />,
  },
  {
    title: '复杂阴影',
    desc: '多层阴影模拟自然光照，营造层次感',
    icon: <Layers size={20} />,
  },
  {
    title: '双主题',
    desc: '亮色米白，暗色深灰，均保持单色',
    icon: <Sun size={20} />,
  },
  {
    title: '平面风格',
    desc: '无悬浮动画，依靠阴影和边框定义层次',
    icon: <Grid3X3 size={20} />,
  },
]

/**
 * 阴影展示数据喵
 */
const shadowTypes = [
  { name: 'Primary', shadow: 'var(--shadow-primary)' },
  { name: 'Elevated', shadow: 'var(--shadow-elevated)' },
  { name: 'Floating', shadow: 'var(--shadow-floating)' },
  { name: 'Modal', shadow: 'var(--shadow-modal)' },
]

/**
 * 开发者头像（用于阴影展示）喵
 */
const developerAvatar = 'https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg'

/**
 * 关于页面组件喵
 * @returns 关于页面组件
 */
/**
 * 开发者信息喵
 */
const developer = {
  name: 'LR小さな狐の妖精喵',
  avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1711474010&spec=640&img_type=jpg',
  description: '小さな狐の妖精 | Web Frontend Development Engineer & UI Designer, Music Artist',
  homepage: 'https://lr-luorui.cn/',
}

/**
 * 关于页面组件喵
 * @returns 关于页面组件
 */
export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>关于项目</h1>

      {/* 开发者介绍 */}
      <Card variant="elevated" className={styles.developerCard}>
        <div className={styles.developerHeader}>
          <User size={20} />
          <span>开发者</span>
        </div>
        <div className={styles.developerContent}>
          <img
            src={developer.avatar}
            alt={developer.name}
            className={styles.developerAvatar}
          />
          <div className={styles.developerInfo}>
            <h3 className={styles.developerName}>{developer.name}</h3>
            <p className={styles.developerDesc}>{developer.description}</p>
            <a
              href={developer.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developerLink}
            >
              <ExternalLink size={14} />
              <span>访问个人主页</span>
            </a>
          </div>
        </div>
      </Card>

      {/* 加入交流群 */}
      <Card variant="elevated" className={styles.qqGroupCard}>
        <div className={styles.qqGroupContent}>
          <img
            src="https://p.qlogo.cn/gh/961223838/961223838/"
            alt="QQ群头像"
            className={styles.qqGroupAvatar}
          />
          <div className={styles.qqGroupInfo}>
            <h3 className={styles.qqGroupTitle}>web前端后端交流群</h3>
            <p className={styles.qqGroupDesc}>
              欢迎加入我们的技术交流群，与其他开发者一起交流学习！
            </p>
            <a
              href="https://qm.qq.com/q/9IbnC6GvwQ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.qqGroupLink}
            >
              <MessageCircle size={14} />
              <span>点击加入群聊</span>
            </a>
          </div>
        </div>
      </Card>

      <Card variant="elevated">
        <div className={styles.content}>
          <p>
            这是一个采用黑白灰单色设计的前端项目模板。
            设计哲学是去除所有彩色干扰，仅通过明度、阴影和边框来构建视觉层次。
          </p>
          <p>
            阴影系统采用复杂的多层叠加，模拟自然光照效果，
            从环境光到主光源，营造出真实的立体感。
          </p>
        </div>
      </Card>

      {/* 设计原则 */}
      <h2 className={styles.sectionTitle}>设计原则</h2>
      
      <div className={styles.principles}>
        {principles.map((item) => (
          <div key={item.title} className={styles.principle}>
            <div className={styles.principleIcon}>{item.icon}</div>
            <div className={styles.principleTitle}>{item.title}</div>
            <div className={styles.principleDesc}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* 阴影展示 */}
      <h2 className={styles.sectionTitle}>阴影系统</h2>
      
      <Card>
        <div className={styles.shadowGrid}>
          {shadowTypes.map((item) => (
            <div key={item.name} className={styles.shadowItem}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: item.shadow }}
              >
                <img
                  src={developerAvatar}
                  alt="shadow demo"
                  className={styles.shadowAvatar}
                />
              </div>
              <span className={styles.shadowLabel}>{item.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* 技术栈 */}
      <h2 className={styles.sectionTitle}>技术栈</h2>

      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <div key={tech.name} className={styles.techItem}>
            <span className={styles.techIcon}>{tech.icon}</span>
            <div className={styles.techInfo}>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techDesc}>{tech.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* AI 辅助开发说明 */}
      <h2 className={styles.sectionTitle}>关于本模板</h2>

      <Card variant="elevated" className={styles.aiCard}>
        <div className={styles.aiContent}>
          <p className={styles.aiTitle}>
            <Sparkles size={18} />
            AI 辅助开发
          </p>
          <p className={styles.aiDesc}>
            本模板在开发过程中使用了 AI 辅助编程。虽然作者会尽力保证代码质量，
            但由于 AI 生成内容的特性，代码可能存在不完善之处。
          </p>
          <div className={styles.aiNotes}>
            <p className={styles.aiWarning}>
              <AlertTriangle size={16} />
              <span>使用须知：</span>
            </p>
            <ul>
              <li>本模板适合有一定前端基础的开发者使用</li>
              <li>代码仅供参考学习，生产环境使用前请自行审查</li>
              <li>遇到问题请先自行排查，不要因此联系作者</li>
              <li>欢迎有需要的开发者使用，捣乱的请绕道</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 打赏支持 */}
      <h2 className={styles.sectionTitle}>支持作者</h2>

      <Card variant="elevated" className={styles.donateCard}>
        <div className={styles.donateContent}>
          <p className={styles.donateTitle}>
            <Coffee size={18} />
            请作者喝咖啡
          </p>
          <p className={styles.donateDesc}>
            如果本模板对你有帮助，欢迎打赏支持，让作者有动力持续维护！
          </p>
          <div className={styles.donateQrCode}>
            <img
              src="https://lr-oss-meow.cn-sy1.rains3.com/images/wxzf-lr.jpeg"
              alt="打赏二维码"
              className={styles.qrCodeImage}
            />
          </div>
        </div>
      </Card>

      {/* 开源许可 */}
      <h2 className={styles.sectionTitle}>开源许可</h2>

      <Card variant="elevated" className={styles.licenseCard}>
        <div className={styles.licenseContent}>
          <p className={styles.licenseTitle}>MIT License</p>
          <p className={styles.licenseDesc}>
            本模板完全开源，采用 MIT 协议。你可以自由地使用、修改、分发，包括商业用途。
            无需征得同意，也无需支付任何费用。
          </p>
          <div className={styles.licenseNotes}>
            <p className={styles.licenseWarning}>
              <AlertTriangle size={16} />
              <span>免责声明：</span>
            </p>
            <ul>
              <li>使用本模板产生的任何问题，与模板作者无关</li>
              <li>如对本模板有不满，请勿联系作者</li>
              <li>本模板旨在帮助开发者快速启动项目，按需自取</li>
            </ul>
          </div>
          <p className={styles.licenseWish}>
            希望这个模板能帮助你更快地开始项目开发，祝编码愉快！
          </p>
        </div>
      </Card>

    </div>
  )
}

export default About
