import React, { useEffect, useMemo, useState } from 'react'
import {
  NextPage
} from 'next'
import Layout from '@components/Layout'
import BlogList, {
  IBlogList
} from '@module/blog.list'
import classNames from 'classnames'
import {
  PAGE_LAYOUT_SEO,
  PROJECT_NAME
} from '@constance/index'

import {
  ARTICLE_LISTS, ARTICLE_TAG_COUNT
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

interface ITags {
  id: number;
  num: number;
  name: string;
}

interface BlogProps {
  blogInfo: BlogListReqData;
  containerEle: any;
  setContainerEle: (ele: any) => void;
  tags: ITags[];
}

const Blog: NextPage<BlogProps, {}> = (props) => {
  const { blogInfo: { lists }, tags } = props
  const [type, setType] = useState(-1);
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })

  useEffect(() => {
    props.setContainerEle('a');
    console.info('tags', tags);
  }, [])

  const filterLists = useMemo(() => {
    if (type === -1) {
      return lists;
    } else {
      return lists?.filter(item => item.tagLists.some(tag => tag.id === type))
    }
  }, [type, lists])


  return (
    <Layout {...PAGE_LAYOUT_SEO.blogList}>
      <div className={'list-tag-fix'}>
        <div className={'filter-bg'}></div>
        <ul>
          {
            tags?.map (item => (
              <li key={item.id} className={item.id === type ? 'active' : ''} onClick={() => {
                setType(item.id)
              }}>{item.name} ({item.num})</li>
            ))
          }
        </ul>
      </div>
      <div className={classString}>
        {
          filterLists?.map(item => (
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
  const tags = await http.get(ARTICLE_TAG_COUNT)
  return {
    blogInfo: res?.data?.result ?? {},
    name: 'blogList',
    tags: [{
      id: -1,
      name: '全部',
      num: res?.data?.result.total
    }].concat(tags?.data?.result ?? [])
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
