import Head from 'next/head'
import React from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'
import CopyRight from '@components/CopyRight'

interface LayoutProps {
  children: any;
  title?: string;
}

const Layout: NextPage<LayoutProps> = (props) => {
  const classStringContainer = classNames({
    'dw-page-router': true
  })
  console.log('Layout', props.title)
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div id="dw-react-web-container" className={classStringContainer}>
        {props.children}
      </div>
      <CopyRight/>
    </div>
  )
}

Layout.defaultProps = {
  title: '这是一个默认的title'
}

export default Layout