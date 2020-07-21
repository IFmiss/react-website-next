import React, { useEffect } from 'react'
import App from 'next/app'
import classNames from 'classnames'
import  '@style/index.less'
import Nav from '@root/components/Nav'
import CopyRight from '@root/components/CopyRight'

import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '@store/index'
import useGrayPage from '@root/use/useGrayPage'
import { SET_BING_PAPER } from '@root/store/mutation-types'
import http from '@root/utils/http'
import { BING_PAPERS } from '@root/constance/api'
import { BingPaper } from '.'

interface AppProps {}
interface AppState {}

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

const AppWrap: React.FC<any> = (props) => {
  const dispatch = useDispatch()
  const { bing } = useSelector((state: { base: { bing:  BingPaper[]} }) => state.base)
  const classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true
  })

  useEffect(() => {
    initBing()
  }, [])

  const initBing = async () => {
    if (!!bing?.length) return
    const res = await http.get(`https://www.daiwei.site/api${BING_PAPERS}`)
    dispatch({
      type: SET_BING_PAPER,
      data: res.result || [],
    })
  }

  const { Component, pageProps } = props
  return (
    <>
      <div className='fixed-paper' style={{
          backgroundImage: `url(${bing?.length && bing[0]?.url})`
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