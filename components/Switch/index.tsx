import React, {
  ReactElement, useState
} from 'react'

import {
  PROJECT_NAME
} from '@constance/index'

import classNames from 'classnames'
import '@components/Switch/switch.less'
import Icon from '@components/Icon'

type SwitchType = 'none' | 'text' | 'icon'

interface SwitchProps {
  checked?: boolean,
  stateType?: SwitchType
  unCheckedName?: string,
  checkedName?: string,
  unCheckedIcon?: ReactElement,
  checkedIcon?: ReactElement,
  unCheckedBg?: string,
  checkedBg?: string,
  onChange?: () => void
}

const Switch: React.FC<SwitchProps> = (props) => {
  const [checked, setChecked] = useState(props.checked)

  const setCheckedHandle = () => {
    props.onChange && props.onChange()
    setChecked(checked => !checked)
  }

  const classString = classNames({
    [`${PROJECT_NAME}-switch`]: true,
    ['switch-checked']: checked
  })

  const checkSwitchStyle = {
    background: props.checkedBg
  }

  const unCheckSwitchStyle = {
    background: props.unCheckedBg
  }

  return (
    <div className={classString}
         onClick={setCheckedHandle}
         style={checked ? checkSwitchStyle : unCheckSwitchStyle}>
      {
        checked ? (
          <span className="switch-on">11</span>
        ) : (
          <span className="switch-off">22</span>
        )
      }
      <span className="switch-range"></span>
    </div>
  )
}

Switch.defaultProps = {
  checked: false,
  stateType: 'text',
  unCheckedName: 'off',
  checkedName: 'on',
  unCheckedIcon: <Icon svgId='cat'/>,
  checkedIcon: <Icon svgId='tag'/>,
  unCheckedBg: 'red',
  checkedBg: 'blue',
  onChange: () => {}
}

export default Switch
