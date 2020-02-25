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

import http from '@utils/http'

import API from '@constance/api'

import './blog.less'

interface BlogProps {
  lists?: Array<any>
}

const Blog: NextPage<BlogProps, {}> = ({ lists }) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
    console.log(lists)
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
  const res = await http.get(API.article_lists)
  return {
    lists: res.result
  }
}

export default Blog
