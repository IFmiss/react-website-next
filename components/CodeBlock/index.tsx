import React, { useMemo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import '@style/high-default.less'
import './code-block.less'

interface CodeBlockProps {
  language: string
  value: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const showLineNumbers = useMemo(() => {
    return language !== 'code'
  }, [language])

  return (
    <figure className="highlight-block">
      <SyntaxHighlighter language={language}
        showLineNumbers={showLineNumbers}
        style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBlock
