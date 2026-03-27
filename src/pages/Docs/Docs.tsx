/* 项目文档页面 - 开发者指南与 AI 使用规范喵 */
import React from 'react'
import {
  BookOpen,
  Code2,
  Palette,
  Layout,
  FolderTree,
  FileCode,
  Sparkles,
  Lightbulb,
  Terminal,
  Box,
  Layers,
  Cpu,
  Route,
  Plus,
} from 'lucide-react'
import styles from './Docs.module.scss'
import { Card, CodeBlock } from '@/components/common'

/**
 * 文档章节数据喵
 */
const docSections = [
  {
    id: 'overview',
    title: '项目概览',
    icon: <BookOpen size={20} />,
    content: `这是一个基于 Vite + React 19 + TypeScript + SCSS + CSS Modules 的前端项目模板。 采用黑白灰单色设计系统，LR UI风格等比例设计，旨在提供一个现代化、简洁、易用的开发起点。`,
  },
  {
    id: 'folder-structure',
    title: '文件夹结构',
    icon: <FolderTree size={20} />,
    content: `项目采用模块化文件夹组织，每个文件夹都有明确的职责：`,
    details: [
      { name: 'src/components/', desc: '可复用组件，按 common/ 和 feature/ 分类' },
      { name: 'src/hooks/', desc: '自定义 React Hooks，处理通用逻辑' },
      { name: 'src/stores/', desc: 'Zustand 状态管理，按功能模块划分' },
      { name: 'src/utils/', desc: '工具函数，如日期、格式化、验证等' },
      { name: 'src/pages/', desc: '页面组件，每个页面一个文件夹' },
      { name: 'src/layouts/', desc: '布局组件，如侧边栏、导航等' },
      { name: 'src/styles/', desc: '全局样式、主题变量、动画定义' },
      { name: 'src/types/', desc: 'TypeScript 类型定义' },
    ],
  },
  {
    id: 'ui-principles',
    title: 'UI 设计原则',
    icon: <Palette size={20} />,
    content: `设计遵循以下核心原则：`,
    details: [
      { name: '单色设计', desc: '仅使用黑白灰，去除所有彩色干扰，通过明度、阴影构建层次' },
      { name: '等比例间距', desc: '所有间距遵循 4px 基线，保持对称和比例关系' },
      { name: '大圆角设计', desc: '按钮、卡片、输入框等使用 16px 及以上圆角，营造柔和感' },
      { name: '复杂阴影', desc: '多层阴影模拟自然光照，从环境光到主光源营造立体感' },
      { name: '毛玻璃效果', desc: '使用 backdrop-filter: blur() 配合半透明背景' },
      { name: '无夸张动画', desc: '仅保留必要的淡入淡出、hover 轻微变色等简约交互' },
    ],
  },
]

/**
 * CSS 变量使用指南喵
 */
const cssVariablesGuide = [
  {
    category: '颜色变量',
    icon: <Layers size={18} />,
    variables: [
      { name: '--bg-primary', usage: '页面主背景', example: 'body 背景色' },
      { name: '--bg-secondary', usage: '次级背景', example: '侧边栏、次级面板' },
      { name: '--bg-tertiary', usage: '第三层背景', example: 'hover 状态、输入框背景' },
      { name: '--bg-elevated', usage: '凸起层背景', example: '卡片、模态框、下拉菜单' },
      { name: '--text-primary', usage: '主要文字', example: '标题、重要内容' },
      { name: '--text-secondary', usage: '次要文字', example: '描述、辅助信息' },
      { name: '--text-tertiary', usage: '第三级文字', example: '占位符、禁用状态' },
      { name: '--text-inverse', usage: '反色文字', example: '深色按钮上的白色文字' },
      { name: '--border-subtle', usage: '淡边框', example: '分割线、微妙边界' },
      { name: '--border-default', usage: '默认边框', example: '输入框、卡片边框' },
      { name: '--border-strong', usage: '强调边框', example: '按钮边框、选中状态' },
    ],
  },
  {
    category: '圆角变量',
    icon: <Box size={18} />,
    variables: [
      { name: '--radius-xs (8px)', usage: '小标签、徽章', example: '状态标签' },
      { name: '--radius-sm (12px)', usage: '小按钮、输入框', example: '小型操作按钮' },
      { name: '--radius-md (16px)', usage: '标准按钮、卡片', example: '主要按钮、信息卡片' },
      { name: '--radius-lg (20px)', usage: '大卡片、面板', example: '内容卡片、设置面板' },
      { name: '--radius-xl (24px)', usage: '模态框、大面板', example: '弹窗、侧边抽屉' },
      { name: '--radius-2xl (28px)', usage: '超大容器', example: '全屏模态、特殊容器' },
    ],
  },
  {
    category: '间距变量',
    icon: <Layout size={18} />,
    variables: [
      { name: '--space-1 (4px)', usage: '图标与文字间隙', example: '按钮内图标间距' },
      { name: '--space-2 (8px)', usage: '紧凑内边距', example: '小按钮内边距' },
      { name: '--space-3 (12px)', usage: '标准间隙', example: '表单项间距' },
      { name: '--space-4 (16px)', usage: '卡片内边距', example: '标准卡片内边距' },
      { name: '--space-5 (20px)', usage: '区块间距', example: '内容区块之间' },
      { name: '--space-6 (24px)', usage: '大区块间距', example: '页面主要区块' },
    ],
  },
  {
    category: '阴影变量',
    icon: <Sparkles size={18} />,
    variables: [
      { name: '--shadow-primary', usage: '基础阴影', example: '普通按钮、小卡片' },
      { name: '--shadow-elevated', usage: '凸起阴影', example: '悬浮卡片、下拉菜单' },
      { name: '--shadow-floating', usage: '悬浮阴影', example: '固定导航、悬浮按钮' },
      { name: '--shadow-modal', usage: '模态阴影', example: '对话框、模态框' },
    ],
  },
]

/**
 * 开发者快速开始喵
 */
const quickStartSteps = [
  { step: 1, title: '安装依赖', command: 'npm install' },
  { step: 2, title: '启动开发服务器', command: 'npm run dev' },
  { step: 3, title: '构建生产版本', command: 'npm run build' },
  { step: 4, title: '运行代码检查', command: 'npm run lint' },
]

/**
 * 代码示例数据喵
 */
const codeExamples = {
  newPageComponent: `// src/pages/NewPage/NewPage.tsx
/* 新页面组件喵 */
import React from 'react'
import styles from './NewPage.module.scss'

export const NewPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>新页面</h1>
    </div>
  )
}

export default NewPage`,

  newPageIndex: `// src/pages/NewPage/index.ts
export { NewPage } from './NewPage'
export { default } from './NewPage'`,

  routerConfig: `// src/router/index.tsx
import { NewPage } from '@/pages/NewPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // ... 其他路由
      {
        path: 'newpage',  // 访问路径: /newpage
        element: <NewPage />,
      },
    ],
  },
]`,

  sidebarNav: `// src/layouts/MainLayout/MainLayout.tsx
import { YourIcon } from 'lucide-react'

const navItems: NavItem[] = [
  // ... 其他导航项
  {
    path: '/newpage',
    label: '新页面',
    icon: <YourIcon size={18} strokeWidth={2} />,
  },
]`,

  fileComment: `/* 这是组件文件头部注释示例喵
 * 文件用途：说明该文件的功能定位
 * 创建日期：2026-03-27
 * 作者：开发者名称
 */

/**
 * 函数功能说明喵
 * @param param1 参数1说明
 * @param param2 参数2说明
 * @returns 返回值说明
 */
const exampleFunction = (param1: string, param2: number): boolean => {
  // 行内注释也要加喵字喵
  return true
}`,
}

/**
 * AI 使用规范喵
 */
const aiGuidelines = [
  {
    title: '样式开发规范',
    icon: <Code2 size={18} />,
    rules: [
      '强制采用大圆角设计（border-radius 建议 18px 及以上）',
      '禁止使用分隔线条（如 border、hr），通过间距、阴影区分模块',
      '必须使用毛玻璃效果（backdrop-filter: blur() + 半透明背景）',
      '允许使用阴影和悬浮动画效果（hover 轻微阴影、轻微缩放）',
      '禁止使用夸张动画和艳丽颜色（紫色、亮粉、渐变叠加等）',
      '整体色调以黑白灰、浅色系为主，保持简洁克制',
    ],
  },
  {
    title: '代码注释规范',
    icon: <FileCode size={18} />,
    rules: [
      '所有函数必须添加函数级注释，说明功能、参数、返回值',
      '文件头部添加块级注释说明文件用途和功能定位',
      '使用 TypeScript 严格类型定义和约束',
    ],
  },
  {
    title: '组件使用规范',
    icon: <Cpu size={18} />,
    rules: [
      '使用项目中已存在的全局提示窗口组件，禁止自行新建',
      '图标必须使用 Lucide React 库，禁止使用 emoji',
      '保持对称间距',
      '按钮、卡片、输入框等元素保持一致的视觉风格',
      '主题切换必须适配亮色和暗色两种模式',
    ],
  },
]

/**
 * 文档页面组件喵
 * @returns 文档页面组件
 */
export const Docs: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Terminal size={28} />
          项目文档
        </h1>
        <p className={styles.subtitle}>开发者指南与 AI 使用规范</p>
      </header>

      {/* 开发者指南 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <BookOpen size={20} />
          开发者指南
        </h2>

        {docSections.map((section) => (
          <Card key={section.id} variant="elevated" className={styles.docCard}>
            <div className={styles.docHeader}>
              <span className={styles.docIcon}>{section.icon}</span>
              <h3 className={styles.docTitle}>{section.title}</h3>
            </div>
            <p className={styles.docContent}>{section.content}</p>
            {section.details && (
              <ul className={styles.detailList}>
                {section.details.map((detail, index) => (
                  <li key={index} className={styles.detailItem}>
                    <code className={styles.code}>{detail.name}</code>
                    <span className={styles.detailDesc}>{detail.desc}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </section>

      {/* CSS 变量指南 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Layout size={20} />
          CSS 变量使用指南
        </h2>

        <div className={styles.variablesGrid}>
          {cssVariablesGuide.map((guide) => (
            <Card key={guide.category} className={styles.variableCard}>
              <div className={styles.variableHeader}>
                <span className={styles.variableIcon}>{guide.icon}</span>
                <h3 className={styles.variableTitle}>{guide.category}</h3>
              </div>
              <div className={styles.variableList}>
                {guide.variables.map((variable, index) => (
                  <div key={index} className={styles.variableItem}>
                    <code className={styles.variableName}>{variable.name}</code>
                    <div className={styles.variableUsage}>{variable.usage}</div>
                    <div className={styles.variableExample}>示例: {variable.example}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 快速开始 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Terminal size={20} />
          快速开始
        </h2>

        <Card variant="elevated">
          <div className={styles.quickStart}>
            {quickStartSteps.map((item) => (
              <div key={item.step} className={styles.quickStartItem}>
                <span className={styles.stepNumber}>{item.step}</span>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{item.title}</div>
                  <code className={styles.command}>{item.command}</code>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 添加新页面路由教程 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Route size={20} />
          如何添加新页面
        </h2>

        <Card variant="elevated" className={styles.docCard}>
          <div className={styles.docHeader}>
            <span className={styles.docIcon}><Plus size={20} /></span>
            <h3 className={styles.docTitle}>添加新页面步骤</h3>
          </div>
          <p className={styles.docContent}>
            要在项目中添加一个新的页面，需要修改以下三个文件：
          </p>
          <ul className={styles.detailList}>
            <li className={styles.detailItem}>
              <code className={styles.code}>src/router/index.tsx</code>
              <span className={styles.detailDesc}>添加路由配置</span>
            </li>
            <li className={styles.detailItem}>
              <code className={styles.code}>src/layouts/MainLayout/MainLayout.tsx</code>
              <span className={styles.detailDesc}>添加侧边栏导航（如需要）</span>
            </li>
            <li className={styles.detailItem}>
              <code className={styles.code}>src/pages/YourPage/</code>
              <span className={styles.detailDesc}>创建页面组件文件夹</span>
            </li>
          </ul>
        </Card>

        <h3 className={styles.subSectionTitle}>1. 创建页面组件</h3>
        <CodeBlock code={codeExamples.newPageComponent} language="tsx" />
        
        <h3 className={styles.subSectionTitle}>2. 创建导出文件</h3>
        <CodeBlock code={codeExamples.newPageIndex} language="typescript" />

        <h3 className={styles.subSectionTitle}>3. 添加路由配置</h3>
        <CodeBlock code={codeExamples.routerConfig} language="tsx" />

        <h3 className={styles.subSectionTitle}>4. 添加侧边栏导航（可选）</h3>
        <CodeBlock code={codeExamples.sidebarNav} language="tsx" />
      </section>

      {/* AI 使用规范 */}
      <section className={styles.section}>
        <div className={styles.aiNotice}>
          <Lightbulb size={20} />
          <span>如果你使用 AI 辅助开发，请让 AI 阅读以下规范</span>
        </div>

        <h2 className={styles.sectionTitle}>
          <Sparkles size={20} />
          AI 使用规范
        </h2>

        <div className={styles.aiGuidelines}>
          {aiGuidelines.map((guide) => (
            <Card key={guide.title} variant="outlined" className={styles.aiCard}>
              <div className={styles.aiHeader}>
                <span className={styles.aiIcon}>{guide.icon}</span>
                <h3 className={styles.aiTitle}>{guide.title}</h3>
              </div>
              <ul className={styles.aiRules}>
                {guide.rules.map((rule, index) => (
                  <li key={index} className={styles.aiRule}>
                    {rule}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* 文件头部注释示例 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FileCode size={20} />
          文件注释示例
        </h2>

        <CodeBlock code={codeExamples.fileComment} language="typescript" />
      </section>
    </div>
  )
}

export default Docs
