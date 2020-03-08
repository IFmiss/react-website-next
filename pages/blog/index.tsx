import React, { useEffect } from 'react'
import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import BlogList, {
  IBlogList
} from '@module/blog.list'
import classNames from 'classnames'
import {
  PROJECT_NAME
} from '@constance/index'

import {
  ARTICLE_LISTS
} from '@constance/api'

import './blog.less'
import http from '@utils/req'

interface BlogListReqData {
  lists: Array<IBlogList>
  total: number
  offset: number
  size: number
  type: string
}

interface BlogProps {
  blogInfo: BlogListReqData
}

const Blog: NextPage<BlogProps, {}> = ({ blogInfo: { lists } }) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
  }, [])

  return (
    <Layout title='this is Blog'>
      {
        lists && lists.length && lists.map(item => (
          <BlogList list={item} key={item.id}/>
        ))
      }
    </Layout>
  )
}

Blog.getInitialProps = async (ctx) => {
  const res = await http.get(`${ARTICLE_LISTS}`, {
    params: { page: '0', size: '666', type: '全部' }
  })
  return {
    blogInfo: res.data && res.data.result || {}
  }
}

export default Blog
