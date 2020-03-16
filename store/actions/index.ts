import {
  bindActionCreators,
  Dispatch
} from 'redux'

import BaseAction from './baseAction'

export default (dispatch: Dispatch) => bindActionCreators({
  ...BaseAction
}, dispatch)
