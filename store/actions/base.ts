import * as types from '@store/mutation-types'
import {
  Dispatch
} from 'redux'

const setContainerEle = (ele: HTMLElement) => {
  return ((dispatch: Dispatch) => {
    dispatch({
      type: types.SET_CONTAINER_ELE,
      data: ele
    })
  })
}

export default {
  setContainerEle
}
