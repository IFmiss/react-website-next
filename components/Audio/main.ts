import AudioInstance, { IDaudioProps, IDAudio } from './index'

const instanceWrapper = (props: IDaudioProps): IDAudio =>  {
  return AudioInstance(props)
}

export default instanceWrapper
