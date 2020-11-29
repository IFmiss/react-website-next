import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
import AudioComponent from '@root/components/Audio'
import { async } from '@root/_next/static/development/pages/_app'
import { getUrlById } from '@root/utils/utils'

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

const AppWrap: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const audio = useRef(null);
  const [musicList, setMusicList] = useState<Array<any>>([]);
  const { bing } = useSelector((state: { base: { bing:  BingPaper[]} }) => state.base)
  const classWrapperString = classNames({
    [`react-next-wrapper`]: true,
    [`theme-default`]: true,
    ['bg-bing']: NEED_BING_PATHS.includes(props.router.pathname)
  })

  useEffect(() => {
    initBing();
    initMusicList();
  }, [])

  useEffect(() => {
    musicList.length && checkNext(true);
  }, [musicList])

  const initMusicList = async () => {
    const res: any = await http.get('https://daiwei.site/netease/playlist/detail?id=2179377798');
    setMusicList(res.playlist.tracks);
  }

  const checkNext = async(init?: boolean) => {
    // getNext
    let index = Math.floor(Math.random() * musicList.length)
    const res: any = await http.get('https://daiwei.site/netease/song/detail?ids=' + musicList?.[index]?.id);
    const list = {
      url: getUrlById(res?.songs?.[0]?.id),
      coverUrl: musicList?.[index]?.al?.picUrl + '?param=300y300',
      name: musicList?.[index]?.name,
      disc: musicList?.[index]?.ar[0]?.name,
    }
    if (init) {
      audio?.current?.setPlayList([list]);
      return;
    }
    audio?.current?.cut(list);
  }

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
      {
        bing?.length && bing[0]?.url && (
          <div className='fixed-paper' style={{
            backgroundImage: `url(${bing?.length && bing[0]?.url})`
          }}>
            <div className='mask'></div>
          </div>
        ) || null
      }
      <div className={`${classWrapperString}`} id='dw-next-container'>
        <div className='react-next-content'>
          <header>
            <Nav name={pageProps.name}/>
          </header>
          <section>
            <Component {...pageProps} />
          </section>
          <AudioComponent ref={audio} handle={{
            onEnded: checkNext,
            onNext: checkNext
          }}></AudioComponent>
          <CopyRight/>
        </div>
      </div>
    </>
  )
}

export default MyApp