import React, { useEffect } from 'react'
import App from 'next/app'
import classNames from 'classnames'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

import { Provider } from 'react-redux'
import store from '@store/index'
// import SiderWarp from '@root/components/SiderWarp'
import { addClass, removeClass } from '@root/utils/utils'
// import Music from '@components/Music'

class MyApp extends App {
  public classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  public showFn = () => {
    addClass(document.getElementById('dw-next-container') as HTMLElement, 'perspective')
  }

  public hideFn = () => {
    removeClass(document.getElementById('dw-next-container') as HTMLElement, 'perspective')
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        {/* <SiderWarp showFn={this.showFn}
                  hideFn={this.hideFn}
                  type='fixed'>
          <Music></Music>
        </SiderWarp> */}
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