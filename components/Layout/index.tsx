import Head from 'next/head'
import React from 'react'
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
  })
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name="description" content={props.desc}/>
        <meta name="Keywords" content={props.keywords}/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="https://www.daiwei.site/static/logo/dw.png" type="image/x-icon"></link>
        <link rel="manifest" href="/static/manifest.json"></link>
        <script src="/static/registerSw.js"></script>
        <script dangerouslySetInnerHTML={{__html: `var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?4891762caa4614e822838c9c3d7f4dd3";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();`}}></script>
      </Head>
      <div id="dw-react-web-container" className={classStringContainer}>
        {props.children}
      </div>
    </>
  )
}

Layout.defaultProps = {
  title: TITLE,
  desc: DESC,
  keywords: KEYWORDS
}

export default Layout
