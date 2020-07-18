import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME } from '@root/constance'
import Link from 'next/link'
import http from '@root/utils/http'
import { BING_PAPERS } from '@root/constance/api'
import './index.less'
import { url } from 'koa-router'

interface BingPaper {
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

const Home: NextPage<HomePorps, {}> = ({
  bing
}) => {
  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true
  })

  useEffect(() => {
    console.log(bing)
  })

  return (
    <Layout>
      <div className='fixed-paper' style={{
        backgroundImage: `url(${bing[0].url})`
      }}>
        <div className='mask'></div>
      </div>
      <div className={classString}>
        <p className='home-tip'>
          基于 next.js 的第四版本个人网站
        </p>
        <p className='href-tip'>
          <Link href="/blog">
            blog
          </Link>
        </p>
        <p className='href-tip'>
          <a href="https://w1.daiwei.site/home">
            react v3 版本
          </a>
        </p>
        <p className='href-tip'>
          <a href="https://v2.daiwei.site">
            vue v2 版本
          </a>
        </p>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await http.get(`https://www.daiwei.site/api${BING_PAPERS}`)
  console.log('res', res.result)
  return {
    bing: res.result || []
  }
}

export default Home
