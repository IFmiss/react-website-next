import React from 'react'
import App from 'next/app'
import classNames from 'classnames'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

import { Provider } from 'react-redux'
import store from '@store/index'
import useGrayPage from '@root/use/useGrayPage'
import { RouterScrollProvider } from '@moxy/next-router-scroll';

interface AppProps {}
interface AppState {}

class MyApp extends App<AppProps, AppState> {
  componentDidMount() {
    useGrayPage()
  }

  render() {
    return (
      <Provider store={store}>
        <RouterScrollProvider>
          <AppWrap {...this.props}></AppWrap>
        </RouterScrollProvider>
      </Provider>
    )
  }
}

const AppWrap: React.FC<any> = (props) => {
  const classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  const { Component, pageProps } = props
  return (
    <>
      <div className='fixed-paper' style={{
        backgroundImage: `url('https://bing.getlove.cn/bingImage')`
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