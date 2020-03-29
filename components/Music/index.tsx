import React, { useEffect, useState, useRef } from 'react'
import cls from 'classnames'
import http from '@utils/req'
import { MUSIC_DETAIL, MUSIC_PLAY_DETAIL } from '@constance/api'
import './music.less'
import loadable from '@loadable/component'
import {
  artists, MusicGroupList
} from './types'
// import dynamic from 'next/dynamic';
// const audioInstance = dynamic(() => import('@components/Audio/main'), {
//   ssr: false
// })
import Dauido from '@components/Audio'

const Ripple = loadable(() => import('ripple-button'))

const Music = () => {
  const [tracksLists, setTracksLists] = useState<any>([])
  const classString = cls('music-sider-wrapper')

  useEffect(() => {
    getMusic(2179377798)

    // const audioInstance = require('@components/Audio/main').default
    // console.log('audioInstance', audioInstance)
    // audioRef.current = audioInstance({
    //   style: 'rect',
    //   type: 'handle'
    // })
    // console.log('Dauido', Dauido)
    // const a = Dauido({})
    // console.log('audioInstance', audioInstance)
    // const a = audioInstance({})
  }, [])

  const getMusic = async (id: number) => {
    const res = await http.get(`${MUSIC_DETAIL}?id=${id}`)
    const { playlist: { tracks } } = res.data
    setTracksLists(tracks)
  }

  const checkMusic = async (item: MusicGroupList) => {
    const { data: { songs : musicDetail } } = await getMusicDetailById(item.id)
    console.log('songs', musicDetail)
    const formatDetail: any = formatMusicLists(musicDetail)
    console.log('formatDetail', formatDetail)
    const st = {
      url: getUrlById(item.id),
      coverUrl: clipImage(formatDetail[0].album.picUrl),
      name: item.name,
      disc: formatMusicArtists(formatDetail[0].artists)
    }
    // audioRef.current.cut(st)
    // const a = Dauido({})
    // a.cut(st)
  }

  const clipImage = (src: string, w: number = 120, h?: number): string => {
    return `${src}?param=${w}y${h ? h : w}`
  }

  const formatMusicLists = (lists: any[]) => {
    console.log('lists', lists)
    return lists.map((item: any) => {
      item.album = item.al
      item.artists = item.ar
      item.duration = item.dt
      return item
    })
  }

  const getMusicDetailById = async (id: number) => {
    const data = await http.get(`${MUSIC_PLAY_DETAIL}?ids=${id}`) as any
    return data
  }

  const formatMusicArtists = (artists: artists) => {
    return artists.map((artist) => artist.name).join(', ')
  }

  const getUrlById = (id: number) => {
    return `//music.163.com/song/media/outer/url?id=${id}.mp3`
  }  

  return (
    <div className={classString}>
      <p className={`${classString}-title`}>音乐</p>
      <div className={`${classString}-content`}>
        {
          tracksLists && tracksLists.map((item: MusicGroupList, index: number) => (
            <Ripple key={index}
                    color='rgba(99, 99, 99, 0.3)'
                    onClick={checkMusic.bind(null, item)}>
              <li>{item.name}</li>
            </Ripple>
          ))
        }
      </div>
    </div>
  )
}

export default Music
