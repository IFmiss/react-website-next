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

import { 
  IStore
} from '@store/types';

import Action from '@store/actions/baseAction'

import './blog.less'
import http from '@utils/req'
import { connect } from 'react-redux'

interface BlogListReqData {
  lists: Array<IBlogList>
  total: number
  offset: number
  size: number
  type: string
}

interface BlogProps {
  blogInfo: BlogListReqData
  ele: any
}

const Blog: NextPage<BlogProps, {}> = (props) => {
  const { blogInfo: { lists } } = props
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
    console.log(props.ele)
  }, [])

  return (
    <Layout>
      <div className={classString}>
        {
          lists && lists.length && lists.map(item => (
            <BlogList list={item} key={item.id}/>
          ))
        }
      </div>
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

const mapState = (state: IStore) => ({ ...state.BaseStore })

const mapDispatch = (state: IStore) => ({ ...state.BaseStore })

export default connect(mapState)(Blog)
