import React from 'react'
import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import {
  ARTICLE_DETAIL
} from '@constance/api'
import classNames from 'classnames'
import {
  PROJECT_NAME
} from '@constance/index'
import http from '@utils/req'
import ReactMarkdown from 'react-markdown'
import './detail.less'
import CodeBlock from "@components/CodeBlock";

interface IBlogListCategorieOrTag {
  id: string;
  name: string;
}

interface IBlogDetail {
  id: string;
  name: string;
  readCount: string;
  editDate: string;
  createDate: string;
  tagLists: IBlogListCategorieOrTag[];
  content: string;
}

interface IBlogPrevNext {
  id: string | null;
  name: string | null;
}

interface BlogDetailProps {
  detail: IBlogDetail,
  next: IBlogPrevNext,
  prev: IBlogPrevNext
}

const BlogDetail: NextPage<BlogDetailProps, {}> = ({ detail, prev, next }) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })
  return (
    (
      detail && detail.id ? (
        <Layout title={detail.name}>
          <ReactMarkdown className={classString}
                      source={detail.content}
                      escapeHtml={false}
                      renderers={{
                        code: CodeBlock
                      }}/>
        </Layout>
      ) : (
        <div>加载中...</div>
      )
    )
  )
}

BlogDetail.getInitialProps = async (ctx) => {
  const { id }  = ctx.query
  const { data } = await http.get(`${ARTICLE_DETAIL}/${id}`)
  return {
    detail: data.result && data.result.detail || {},
    next: data.result && data.result.next || null,
    prev: data.result && data.result.prev || null
  }
}
export default BlogDetail
