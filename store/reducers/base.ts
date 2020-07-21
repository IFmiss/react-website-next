import {
  combineReducers
} from 'redux'

import {
  IActionProps
} from '@store/types'

import {
  SET_CONTAINER_ELE,
  SET_BING_PAPER
} from '@store/mutation-types'

const containerEle = (state = null, action: IActionProps<HTMLElement>) => {
  switch (action.type) {
    case SET_CONTAINER_ELE:
      return action.data
    default:
      return state
  }
}

const bingPaper = (state = [], action: IActionProps<any>) => {
  switch (action.type) {
    case SET_BING_PAPER:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  containerEle,
  bing: bingPaper
})
