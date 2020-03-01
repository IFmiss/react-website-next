import React, { useEffect } from 'react'
import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import {
  ARTICLE_DETAIL
} from '@constance/api'
import http from '@utils/http'

import './blog-detail.less'
import '@style/high-default.less'
import '@style/high-custom.less'
import marked from "marked"
import classNames from 'classnames'
import {
  PROJECT_NAME
} from '@constance/index'
import Link from 'next/link'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code: any) {
    return require('highlight.js').highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export interface IBlogListCategorieOrTag {
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

  useEffect(() => {
    const ele = document.getElementById('dw-next-container')
    ele && (ele.scrollTop = 0)
  }, [])

  return (
    <Layout title={detail.name}>
      <div className={classString}>
        <div className={`${classString}-mian`}>
        <h2>{detail.name}</h2>
      </div>
        <div className={`${classString}-content`}
            dangerouslySetInnerHTML = {{__html: marked(detail.content)}}>
        </div>
        {
          detail.editDate ? (
            <div>
              <p>---------------</p>
              最后编辑时间: {detail.editDate}
            </div>
          ) : null
        }
        <div className={`${classString}-entry`}>
          {
            prev && prev.id && (
              <Link href={`/blog/detail?id=${prev.id}`}>
                <a className={`${classString}-entry-prev`}
                    title={prev.name || ''}>
                  { prev.name ? `上一篇 : ${prev.name}` : '' }
                </a>
              </Link>
            )
          }

          {
            next && next.id && (
              <Link href={`/blog/detail?id=${next.id}`}>
                <a className={`${classString}-entry-next`}
                    title={next.name || ''}>
                  { next.name ? `下一篇 : ${next.name}` : '' }
                </a>
              </Link>
            )
          }
        </div>
      </div>
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
