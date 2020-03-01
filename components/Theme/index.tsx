import React, {
  useState, useEffect
} from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from '@root/constance'

import {
  removeClass,
  addClass
} from '@utils/utils'
import './theme.less'

export type ThemeType = 'default' | 'dark' | 'light'

interface IThemeProps {
  type?: ThemeType
}

const ThemeLists: Array<{type: ThemeType}> = [{
    type: 'default'
  }, {
    type: 'dark'
  }, {
    type: 'light'
  }
]

const Theme: React.FC<IThemeProps> = ({ type = 'default' }) => {
  let t: any = null
  const classThemeWrapper = classNames({
    [`${PROJECT_NAME}-comp-theme`]: true
  })
  const [theme, setTheme] = useState<ThemeType>('default')
  const [show, setShow] = useState(false)

  const currentMainClass = classNames({
    [`${classThemeWrapper}-main`]: true,
    ['active']: show
  })

  const selectTheme = (name: ThemeType) => {
    if (name === theme) return

    const ele = document.getElementById('dw-next-container')
    if (!ele) return

    removeClass(ele, `theme-${theme}`)
    addClass(ele, `theme-${name}`)

    localStorage.setItem('theme', name)
    setTheme(name)

    setShow(false)
    t && clearTimeout(t)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as ThemeType
    if (localTheme !== theme) {
      selectTheme(localTheme)
    }
  }, [])

  const showTheme = () => {
    t && clearTimeout(t)
    setShow(true)
    t = setTimeout(() => {
      setShow(false)
    }, 5000)
  }

  return (
    <div className={classThemeWrapper}>
      <div className={currentMainClass}>
        <div className={`${classThemeWrapper}-main-select`}>
          {
            ThemeLists.map(item => (
              <span className={`square ${item.type}`}
                    onClick={selectTheme.bind(null, item.type)}
                    key={item.type}></span>
            ))
          }
        </div>
        <span className='square current' onClick={showTheme}></span>
      </div>
    </div>
  )
}

export default Theme
