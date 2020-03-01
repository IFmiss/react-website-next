import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import './code-block.less'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
                         style={dark}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBlock
