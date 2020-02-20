import React from 'react'
import App from 'next/app'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className='react-next-wrapper night'>
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