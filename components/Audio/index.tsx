import React, { useState, useRef, useImperativeHandle, useMemo, useEffect } from 'react'
import cls from 'classnames'
import './audio.less'
import NextIcon from './next.svg'
import PauseIcon from './pause.svg'
import PlayIcon from './play.svg'
import {
  throttle
} from './utils'
const Vibrant = require('node-vibrant');

export type EventType = 'onEnded' | 'onNext'

type AddEventFn = (name: EventType, cb: Function) => void

type DaudioStyle = 'rect' | 'circle'

type DaudioEventType = {
  [props in EventType]?: Function
}

type RGB = {
  [k in 'r' | 'g' | 'b']: number;
}

type DaudioEventTypeQueue = {
  [props in EventType]: Array<Function>
} | null

export interface IDaudioPalyInfo {
  url: string;
  coverUrl: string;
  name: string;
  disc: string;
}

export type DaudioType = 'list' | 'handle'

export type DaudioPlayType = 'sequential-play' | 'random-play' | 'loop-play'

export interface IDaudioProps {
  style?: DaudioStyle;
  type?: DaudioType;
  playType?: DaudioPlayType;
  playList?: Array<IDaudioPalyInfo>;
  handle?: DaudioEventType;
  onNext?: () => void;
}

export interface IDAudioRef {
  /**
   * 初始化，显示audio组件
   */
  start: () => void;

  /**
   * 下一首
   */
  next: (e: Event) => void;
  // next: (nextAudio: IDaudioPalyInfo) => void;
  cut: (nextAudio: IDaudioPalyInfo) => void;

  /**
   * 播放
   */
  play: () => void;

  /**
   * 暂停
   */
  pause: () => void;

  /**
   * 设置audio的类型。⭕️还是方形
   */
  setStyle: (t: DaudioStyle) => void;

  /**
   * 设置播放形式 默认是handle
   */
  setAudioType: (t: DaudioType) => void;

  /**
   * 设置播放类型
   */
  setPlayType: (t: DaudioPlayType) => void;

  /**
   * 设置播放列表
   */
  setPlayList: (playlist: Array<IDaudioPalyInfo>) => void;

  /**
   * 设置事件监听
   */
  addEvent: AddEventFn;
}

export interface IDAudio extends IDAudioRef {
  destroy: () => void;
}

const DEFAULT_PLAY_INFO = {
  name: 'sunmmer',
  disc: 'hollo sunmmer',
  url: 'https://www.daiwei.site/static/music/background.mp3',
  coverUrl: 'https://www.daiwei.site/static/logo/sunmmer.jpg'
}

const Daudio: React.ForwardRefRenderFunction<IDAudioRef, IDaudioProps> = ({
  style = 'circle',
  type = 'handle',
  playType = 'sequential-play',
  playList = [],
  handle,
  onNext
}, ref) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [rgb, setRgb] = useState<RGB>({
    r: 7,
    g: 17,
    b: 27
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [audioStyle, setAudioStyle] = useState<DaudioStyle>(style)
  const [playTypeState, setPlayTypeState] = useState<DaudioPlayType>(playType)
  const [audioTypeState, setAudioTypeState] = useState<DaudioType>(type)
  const eventQueue = useRef<DaudioEventTypeQueue>(null)

  const [playIndex, setPlayIndex] = useState<number>(0)
  const [playQueue, setPlayQueue] = useState<Array<IDaudioPalyInfo>>(playList)

  const [muted, setMuted] = useState<boolean>(true)

  const audioRef = useRef<HTMLAudioElement>(null)

  const isHandle = useMemo(() => {
    return audioTypeState === 'handle'
  }, [audioTypeState])

  const currentPlayList = useMemo(() => {
    return audioTypeState === 'handle' ? playQueue[0] ?? {} : playQueue[playIndex] ?? {}
  }, [playIndex, playQueue[0]])

  const isLoop = useMemo(() => {
    return playTypeState === 'loop-play'
  }, [playTypeState])

  const checkAudioType = () => {
    setAudioStyle((audioStyle) => audioStyle === 'rect' ? 'circle' : 'rect');
  }

  useEffect(() => {
    (audioRef.current  as any)?.addEventListener('timeupdate', onAudioTimeUpdate);
    handle && initHandle(handle)

    return () => {
      (audioRef.current as any).removeEventListener('timeupdate', onAudioTimeUpdate)
    }
  }, [])

  const initHandle = (handle: DaudioEventType) => {
    // 注册事件
    const handleKeys = handle && Object.keys(handle)
    handleKeys && (handleKeys as Array<EventType>).forEach((item) => {
      addEvent(item, handle && handle[item] || function(){})
    })
  }

  const setStyle = (t: DaudioStyle) => {
    setAudioStyle(t)
  }

  const handlePlayPause = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    playing ? pause() : play()
  }

  const pause = () => {
    audioRef.current?.pause()
    setPlaying(false)
  }

  const play = () => {
    audioRef.current?.play()
    setPlaying(true)
  }

  const next = (e: Event) => {
    e.stopPropagation()
    e.preventDefault()
    // setHandleList(audioInfo)
    if (isHandle) {
      // next事件
      const eventHandler = eventQueue.current;
      // onNext?.()
      // console.log(eventHandler?.onNext)
      // eventHandler?.onNext?.map(item => item.call(null))
      // eventQueue.current?.onNext?.forEach(item => item())
      handle?.onNext?.();
      return
    }
    checkNextByList()
  }

  const setAudioType = (t: DaudioType) => {
    setAudioTypeState(t)
  }

  const playByIndex = (index: number) => {
    setPlayIndex(index)
    play()
  }

  /**
   * 列表切换下一首
   */
  const checkNextByList = () => {
    const l = playQueue.length
    if (l === 1) {
      load()
      play()
      return
    }
    // 随机
    if (playType === 'random-play') {
      playByIndex(~~((Math.random() * playQueue.length)))
    } else {
      // 列表
      const index = playIndex >= l - 1 ? 0 : playIndex + 1
      playByIndex(index)
    }
  }

  /**
   * type 为 handle 时可调用
   * @param nextAudio 切换下一首 
   */
  const cut = (nextAudio: IDaudioPalyInfo) => {
    if (!isHandle) {
      throw Error(`The 【cut】 method can only be executed when the type is handle`)
    }
    load()
    setPlayQueue([nextAudio])
    getColorByImg(nextAudio.coverUrl);
    play()
  }

  const setPlayList = (list: Array<IDaudioPalyInfo>) => {
    setPlayQueue(list)
  }

  const setPlayType = (t: DaudioPlayType) => {
    setPlayTypeState(t)
  }

  const start = () => {
  }

  const ended = () => {
    handle?.onEnded?.();
    // eventQueue.current?.onEnded?.forEach(item => item())
  }

  const load = () => {
    audioRef.current?.load()
  }

  const onAudioPlay = () => {
    if (muted) {
      setMuted(false)
    }
    // other fn
  }

  /**
   * 添加事件
   */
  const addEvent = (name: EventType, fn: Function) => {
    let obj = {} as any
    const eventHandler = eventQueue.current
    obj[name] = eventHandler && eventHandler[name] && eventHandler[name].length
                  ? ([...eventHandler[name], fn]) : [fn]
    eventQueue.current = Object.assign({}, eventHandler, obj)
  }

  const {
    url,
    coverUrl,
    name,
    disc
  } = currentPlayList

  const mainClass = cls({
    [`d-audio`]: true,
  })

  const classWrapper = cls({
    [mainClass]: true,
    [audioStyle]: true,
    [`show`]: true
  })

  const classCricle = cls({
    [`d-audio-circle`]: true
  })

  const classPlayPause = cls({
    [`d-audio-play-pause`]: true,
    // [`play`]: playing,
    // [`pause`]: !playing
  })

  const classLoading = cls({
    [`d-audio-loading`]: true,
    [`active`]: loading
  })

  const blurStyle = {
    backgroundImage: `url(${coverUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  const getColorByImg = async (pic: string) => {
    let r;
    if (!currentPlayList.coverUrl) {
      r = {
        r: '7',
        g: '17',
        b: '27'
      }
    }
    r = (await Vibrant.from(pic).getPalette()).LightMuted;
    setRgb(r);
  };

  const rangeStyle = {
    border: `3px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`
  }

  const progressStyle = {
    backgroundImage: `linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 30%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.7))`,
    width: `${progress}%`
  }

  const onAudioTimeUpdate = throttle((e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    setProgress(~~((audioRef.current?.currentTime || 0) / (audioRef.current?.duration || 1) * 100))
  }, 1000)

  const renderCricle = () => {
    return (
      <div className={classCricle}
           title={`${name} - ${disc}`}>
        <img className={`${classCricle}`} crossOrigin = "anonymous" src={coverUrl}/>
        <div className={`${classCricle}-range`} style={rangeStyle}></div>
      </div>
    )
  }

  useImperativeHandle(ref, () => ({
    start,
    next,
    play,
    pause,
    addEvent,
    setStyle,
    cut,
    setAudioType,
    setPlayList,
    setPlayType
  }));

  const renderRect = () => (
    <React.Fragment>
      <div className={`${mainClass}-detail`}>
        <div className={`${mainClass}-detail-config`}>
          <div className={classPlayPause} onClick={handlePlayPause}>
            {
              playing ? (
                <PauseIcon></PauseIcon>
              ) : (
                <PlayIcon></PlayIcon>
              )
            }
          </div>
          <div className="d-audio-next">
            <NextIcon onClick={next}></NextIcon>
          </div>
        </div>
        <div className={`${mainClass}-detail-info`}>
          <h3 className={`${mainClass}-detail-info-name`} title={name}>{name}</h3>
          <div className={`${mainClass}-detail-info-disc`} title={disc}>{disc}</div>
        </div>
      </div>
      <div className={`${mainClass}-blur-bg`} style={blurStyle}></div>
      <div className={classLoading}></div>
      <div className={`${mainClass}-progress`} style={progressStyle}></div>
    </React.Fragment>
  )

  return (
    currentPlayList.url && (
      <div className={classWrapper} onClick={checkAudioType}>
        { renderCricle() }
        { renderRect() }
        <audio className={`${mainClass}-ele`}
              src={url}
              ref={audioRef}
              muted={muted}
              loop={isLoop}
              onPlay={onAudioPlay}
              onEnded={ended}></audio>
      </div>
    ) || null
  )
}

// export default Daudio
const AudioComponent = React.forwardRef<IDAudioRef>(Daudio)

export default AudioComponent
