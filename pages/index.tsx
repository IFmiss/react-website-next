import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME, HOME_LINK_LISTS, PAGE_LAYOUT_SEO } from '@root/constance'
import Link from 'next/link'
import './index.less'
import http from '@utils/req'
import NoneText from '@root/components/NoneText'
import { HOME_ROUTERS } from '@root/constance/api'

// export interface BingPaper {
//   startdate: string,
//   fullstartdate: string,
//   enddate: string,
//   url: string,
//   urlbase: string,
//   copyright: string,
//   copyrightlink: string,
//   title: string,
// }

interface RouterItem {
  id: number;
  imgSrc: string;
  name: string;
  type: number
  url: string;
  visible: 0 | 1;
}

interface HomePorps {
  // bing: BingPaper[];
  routes: Array<RouterItem>;
}

const Home: NextPage<HomePorps, {}> = ({
  routes
}) => {
  console.info('routes', routes);
  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true
  })

  const renderLinkContent = (item: RouterItem) => {
    return (
      <a key={item.id} href={item.url} className='href-tip'>
        {
          item?.imgSrc ? (
            item?.imgSrc.indexOf('http') === 0 ? (
              <img src={item.imgSrc} alt=""/>
            ) : <div className='inner-img' dangerouslySetInnerHTML={{__html: item.imgSrc}}/>
          ) : null
        }
        {item.name}
      </a>
    )
  }

  return (
    <Layout {...PAGE_LAYOUT_SEO.home}>
      <div className={classString}>
        <p className='home-tip'>
          基于 next.js 的第四版本个人网站
        </p>
        <div className='tip-lists'>
          {
            routes?.length ? (
              routes.map(item => (
                item?.url.indexOf('http') === 0 ? (
                  // 外部链接
                  renderLinkContent(item)
                ) : (
                  <Link key={item.id} href={item.url}>
                    { renderLinkContent(item) }
                  </Link>
                )
              ))
            ) : <NoneText/>
          }
        </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await http.get(`${HOME_ROUTERS}`);
  return {
    routes: res?.data?.result ?? []
  }
}

export default Home
