import React from 'react'
import App from 'next/app'
import classNames from 'classnames'
import '@assets/svg'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

class MyApp extends App {
  public classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  render() {
    const { Component, pageProps } = this.props
    return (
      <div className={this.classWrapperString} id='dw-next-container'>
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
    )
  }
}

export default MyApp