import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import './code-block.less'

interface CodeBlockProps {
  language: string
  value: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <figure className="highlight-block">
      <SyntaxHighlighter language={language}
                         showLineNumbers={true}
                         useInlineStyles={true}
                         style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBlock
