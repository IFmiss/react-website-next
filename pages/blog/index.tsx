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

import Action from '@root/store/actions/index'

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
  containerEle: any,
  setContainerEle: (ele: any) => void
}

const Blog: NextPage<BlogProps, {}> = (props) => {
  const { blogInfo: { lists } } = props
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
    props.setContainerEle('a')
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
    blogInfo: res.data && res.data.result || {},
    name: 'blogList'
  }
}

const mapState = (state: IStore) => ({ 
  containerEle: state.base.containerEle
 })

const mapDispatch = Action

Blog.defaultProps = {
  setContainerEle: () => {},
  containerEle: null
}

export default connect(mapState, mapDispatch)(Blog)
