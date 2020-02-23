import React from 'react'

import {
  NextPage
} from 'next'

interface BlogDetailProps {
  id?: number
}

const BlogDetail: NextPage<BlogDetailProps, {}> = ({ id }) => {
  return (
    <div>1111</div>
  )
}

export default BlogDetail
