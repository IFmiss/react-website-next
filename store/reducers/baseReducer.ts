import {
  combineReducers
} from 'redux'

import {
  IActionProps
} from '@store/types'

import {
  SET_CONTAINER_ELE
} from '@store/mutation-types'

const containerEle = (state = null, action: IActionProps<HTMLElement>) => {
  switch (action.type) {
    case SET_CONTAINER_ELE:
      return action.data
    default:
      return null
  }
}

export default combineReducers({
  containerEle
})
