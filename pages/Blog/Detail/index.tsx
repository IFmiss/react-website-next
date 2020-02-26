import React from 'react'

import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import {
  ARTICLE_DETAIL
} from '@constance/api'
import http from '@utils/http'

interface BlogDetailProps {
  detail?: any,
  next: any,
  prev: any
}

const BlogDetail: NextPage<BlogDetailProps, {}> = ({ detail }) => {
  return (
    <Layout title={detail.name}>
      <div>{ JSON.stringify(detail) }</div>
    </Layout>
  )
}

BlogDetail.getInitialProps = async (ctx) => {
  const id = ctx.query.id
  const res = await http.get(`${ARTICLE_DETAIL}/${id}`)
  return {
    detail: res.result.detail,
    next: res.result.next,
    prev: res.result.prev
  }
}

export default BlogDetail
