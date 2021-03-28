import Head from 'next/head'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'
import { TITLE, DESC, KEYWORDS } from '@root/constance'

interface LayoutProps {
  children: any;
  title?: string;
  desc?: string;
  keywords?: string;
}

const Layout: NextPage<LayoutProps> = (props) => {
  const classStringContainer = classNames({
    'dw-page-router': true
  });

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name="description" content={props.desc}/>
        <meta name="Keywords" content={props.keywords}/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="preconnect" href="//fonts.googleapis.com"/>
        <link rel="preconnect" href="//bing.getlove.cn"/>
        <link rel="preconnect" href="//hm.baidu.com" crossOrigin='use-credentials'/>
        <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
        <link rel="dns-prefetch" href="//hm.baidu.com"/>
        <link rel="dns-prefetch" href="//bing.getlove.cn"/>
        <link rel="shortcut icon" href="https://www.daiwei.site/static/logo/dw.png" type="image/x-icon"></link>
        {/* <link rel="manifest" href="/static/manifest.json"></link> */}
        {/* <script src="/static/registerSw.js"></script> */}
      </Head>
      <div id="dw-react-web-container" className={classStringContainer}>
        {props.children}
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"></link>
    </>
  )
}

Layout.defaultProps = {
  title: TITLE,
  desc: DESC,
  keywords: KEYWORDS
}

export default Layout
