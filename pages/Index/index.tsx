import React, { useEffect } from 'react'
import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import BlogList from '@module/blog.list'
import classNames from 'classnames'
import {
  PROJECT_NAME
} from '@constance/index'

import fetch from 'unfetch'

import './blog.less'

interface BlogProps {
  a?: string
}

const Blog: NextPage<BlogProps, {}> = ({ a }) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
    console.log('blog')
    const fetcthBlogLists = async () => {
      const res = await fetch('http://127.0.0.1:4000/article/detail/36')
      const json = await res.json()
      console.log(json)
    }
    fetcthBlogLists()
  }, [])

  return (
    <Layout title='this is Blog'>
      <div className={classString}>
        <BlogList/>
      </div>
    </Layout>
  )
}

Blog.getInitialProps = async (ctx) => {
  console.log('ctx', ctx)
  return {
    a: '111'
  }
}

export default Blog
