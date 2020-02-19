import React from 'react'
import App from 'next/app'
import  '@style/index.less'
import Nav from '@root/components/Nav'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className='react-next-wrapper'>
        <header>
          <Nav/>
        </header>
        <section>
          <Component {...pageProps} />
        </section>
      </div>
    )
  }
}

export default MyApp