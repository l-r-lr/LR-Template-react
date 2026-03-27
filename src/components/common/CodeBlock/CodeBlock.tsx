/* 代码高亮组件，使用 prism-react-renderer 实现语法高亮喵 */
import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import styles from './CodeBlock.module.scss'

/**
 * 代码块组件属性接口喵
 */
interface CodeBlockProps {
  /** 代码内容 */
  code: string
  /** 语言类型，默认为 typescript */
  language?: string
  /** 是否显示行号，默认为 false */
  showLineNumbers?: boolean
}

/**
 * 代码高亮组件喵
 * @param props 组件属性
 * @returns 代码块组件
 * @example
 * <CodeBlock code="const a = 1" language="typescript" />
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  showLineNumbers = false,
}) => {
  return (
    <div className={styles.codeBlock}>
      <Highlight
        theme={themes.vsDark}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${styles.pre}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className={styles.line}>
                {showLineNumbers && (
                  <span className={styles.lineNumber}>{i + 1}</span>
                )}
                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
