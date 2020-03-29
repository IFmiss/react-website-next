import audio, {
  IDaudioProps,
  IDAudioRef,
  EventType
} from './index'

const audioInstance = (args: IDaudioProps): IDAudioRef => {
  const {
    style,
    handle,
    type,
    playList,
    playType
  } = args


  console.log('audio', audio)

  // 设置样式
  style
    && audio.setStyle(style)

  // 设置audio 类型  列表还是handle
  type
    && audio.setAudioType(type)

  // 设置播放列表
  playList
    && type === 'list'
    && playList.length
    && audio.setPlayList(playList)

  playType
    && audio.setPlayType(playType)

  // 注册事件
  const handleKeys = handle && Object.keys(handle)
  handleKeys && (handleKeys as Array<EventType>).forEach((item) => {
    audio.addEvent(item, args.handle && args.handle[item] || function(){})
  })

  // 初始化
  audio.start()
  return audio
}

export default audioInstance
