import React, { useEffect } from 'react'
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
import Link from 'next/link'

import { 
  IStore
} from '@store/types';
import MainAction from '@root/store/actions/index'
import { connect } from 'react-redux'

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

const BlogDetail: NextPage<BlogDetailProps, {}> = (props) => {
  const { detail, prev, next } = props
  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      console.log('detail', props)
    }, 0)
  }, [])

  return (
    (
      detail && detail.id ? (
        <Layout title={detail.name}>
          <div className={classString}>
            <h1 className={`${classString}-title`}>{detail.name}</h1>
            <ReactMarkdown source={detail.content}
                        escapeHtml={false}
                        renderers={{
                          code: CodeBlock
                        }}/>
            <div className={`${classString}-entry`}>
              {
                prev && prev.id ? (
                  <Link href={`/blog/detail?id=${prev.id}`}>
                    <a className={`${classString}-entry-prev`}
                        title={prev.name || ''}>
                      { prev.name ? `上一篇 : ${prev.name}` : '' }
                    </a>
                  </Link>
                ) : null
              }
              {
                next && next.id ? (
                  <Link href={`/blog/detail?id=${next.id}`}>
                    <a className={`${classString}-entry-next`}
                        title={next.name || ''}>
                      { next.name ? `下一篇 : ${next.name}` : '' }
                    </a>
                  </Link >
                ) : null
              }
            </div>
          </div>
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

const mapState = (state: IStore) => ({ 
  containerEle: state.base.containerEle
 })

const mapDispatch = MainAction

export default connect(mapState, mapDispatch)(BlogDetail)
