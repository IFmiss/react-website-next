import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'

interface BlogProps {}

const Blog: NextPage<BlogProps> = () => {
  console.log('blog')
  return (
    <Layout title='this is Blog'>
      <div>hello this is blog</div>
    </Layout>
  )
}

export default Blog