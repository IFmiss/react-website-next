import React, { useEffect } from 'react'
import App from 'next/app'
import classNames from 'classnames'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

import { Provider } from 'react-redux'
import store from '@store/index'
import useGrayPage from '@root/use/useGrayPage'
import http from '@root/utils/http'
import { BING_PAPERS } from '@root/constance/api'

class MyApp extends App {
  public classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  componentDidMount() {
    useGrayPage()
    // this.initPapeData()
  }

  async initPapeData () {
    const res = await http.get(`${BING_PAPERS}`)
    console.log('res', res)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <div className={`${this.classWrapperString}`} id='dw-next-container'>
          <div className='react-next-content'>
            <header>
              <Nav/>
            </header>
            <section>
              <Component {...pageProps} />
            </section>
            <CopyRight/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default MyApp