import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Nav from '@components/Nav'
import CopyRight from '@components/CopyRight'

interface LayoutProps {
  children: any;
  title?: string;
}

const Layout: NextPage<LayoutProps> = (props) => {
  console.log('Layout', props.title)
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <Nav/>
      </header>
      {props.children}
      <CopyRight/>
    </div>
  )
}

Layout.defaultProps = {
  title: '这是一个默认的title'
}

export default Layout
