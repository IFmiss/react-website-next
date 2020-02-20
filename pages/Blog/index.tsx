import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'
import BlogList from '@module/blog.list'

interface BlogProps {}

const Blog: NextPage<BlogProps> = () => {
  console.log('blog')
  return (
    <Layout title='this is Blog'>
      <BlogList/>
      <div>hello this is blog111</div>

      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>

      <div>hello this is blog111</div>

      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>

      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
      <div>hello this is blog111</div>
    </Layout>
  )
}

export default Blog