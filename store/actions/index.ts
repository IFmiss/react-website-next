import {
  bindActionCreators,
  Dispatch
} from 'redux'

import base from './base'

export default (dispatch: Dispatch) => bindActionCreators({
  ...base
}, dispatch)
