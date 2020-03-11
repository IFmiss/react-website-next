import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'

import '@style/high-custom.less'
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
                         useInlineStyles={false}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBlock
