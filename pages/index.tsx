import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME, HOME_LINK_LISTS, PAGE_LAYOUT_SEO } from '@root/constance'
import Link from 'next/link'
import './index.less'

export interface BingPaper {
  startdate: string,
  fullstartdate: string,
  enddate: string,
  url: string,
  urlbase: string,
  copyright: string,
  copyrightlink: string,
  title: string,
}

interface HomePorps {
  bing: BingPaper[]
}

const Home: NextPage<HomePorps, {}> = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true
  })

  return (
    <Layout {...PAGE_LAYOUT_SEO.home}>
      <div className={classString}>
        <p className='home-tip'>
          基于 next.js 的第四版本个人网站
        </p>
        <div className='tip-lists'>
          {
            HOME_LINK_LISTS.map((item, index) => (
              item.self ? (
                <Link key={index} href={item.href}>
                  <a className='href-tip'>{item.title}</a>
                </Link>
              ) : (
                <a key={index} className='href-tip' href={item.href}>
                  <span>{typeof item.title == 'function'
                    ? item.title()
                    : item.title}</span>
                </a>
              )
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  return {
    name: 'home'
  }
}

export default Home
