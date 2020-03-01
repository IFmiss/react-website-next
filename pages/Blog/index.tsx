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

import http from '@utils/http'

import {
  ARTICLE_LISTS
} from '@constance/api'

import './blog.less'

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
    console.log(lists)
  }, [])

  return (
    <Layout title='this is Blog'>
      {
        lists && lists.length && lists.map(item => (
          <div key={item.id}
               className={classString}>
            <BlogList list={item}/>
          </div>
        ))
      }
    </Layout>
  )
}

Blog.getInitialProps = async (ctx) => {
  console.log(ctx)
  const params = new URLSearchParams({ page: '0', size: '666', type: '全部' })
  const res = await http.get(`${ARTICLE_LISTS}?${params}`, {})
  return {
    blogInfo: res.result
  }
}

export default Blog
