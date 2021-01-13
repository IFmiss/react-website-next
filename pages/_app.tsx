import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import App from 'next/app'
import classNames from 'classnames'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '@store/index'
import useGrayPage from '@root/use/useGrayPage'
import http from '@root/utils/http'
import { getUrlById } from '@root/utils/utils'
import Router from 'next/router'

interface AppProps {}
interface AppState {}

const NEED_BING_PATHS = [
  '/'
]

class MyApp extends App<AppProps, AppState> {
  componentDidMount() {
    useGrayPage()
  }

  render() {
    return (
      <Provider store={store}>
        <AppWrap {...this.props}></AppWrap>
      </Provider>
    )
  }
}

let cachedScrollPositions: Array<[number, number]> = [];
const AppWrap: React.FC<any> = (props) => {
  const classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  useEffect(() => {
    // next 返回滚动的bug
    if ('scrollRestoration' in window.history) {
      // window.history.scrollRestoration = 'manual';
      let shouldScrollRestore: {
        x: number,
        y: number
      } | boolean;

      Router?.events?.on('routeChangeStart', () => {
        cachedScrollPositions.push([window.scrollX, window.scrollY]);
      });

      Router?.events?.on('routeChangeComplete', () => {
        if (shouldScrollRestore) {
          const { x, y } = shouldScrollRestore as any;
          window.scrollTo(x, y);
          shouldScrollRestore = false;
        }
      });

      Router?.beforePopState(() => {
        const [x, y] = cachedScrollPositions.pop() as any;
        shouldScrollRestore = { x, y };

        return true;
      });
    }
  }, []);

  const { Component, pageProps } = props
  return (
    <>
      <div className='fixed-paper' style={{
        backgroundImage: `url('https://bing.getlove.cn/bingImage')`,
        opacity: '1'
      }}>
        <div className='mask'></div>
      </div>
      <div className={`${classWrapperString}`} id='dw-next-container'>
        <div className='react-next-content'>
          <header>
            <Nav name={pageProps.name}/>
          </header>
          <section>
            <Component {...pageProps} />
          </section>
          <CopyRight/>
        </div>
      </div>
    </>
  )
}

export default MyApp