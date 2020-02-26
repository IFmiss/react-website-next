import React, {
  useState, useEffect
} from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from '@root/constance'

import {
  removeClass,
  addClass
} from '@utils/utils'

type ThemeType = 'default' | 'dark' | 'light'

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
  const classThemeWrapper = classNames({
    [`${PROJECT_NAME}-comp-theme`]: true
  })

  const [theme, setTheme] = useState<ThemeType>('default')

  const selectTheme = (name: ThemeType) => {
    if (name === theme) return

    const ele = document.getElementById('dw-next-container')
    if (!ele) return

    removeClass(ele, `theme-${theme}`)
    addClass(ele, `theme-${name}`)

    localStorage.setItem('theme', name)
    setTheme(name)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as ThemeType
    if (localTheme !== theme) {
      selectTheme(localTheme)
    }
  }, [])

  return (
    <div className={classThemeWrapper}>
      <div className={`${classThemeWrapper}-mian`}>{theme}</div>
      <div className={`${classThemeWrapper}-select`}>
        {
          ThemeLists.map(item => (
            <span onClick={selectTheme.bind(null, item.type)}
                  key={item.type}>{item.type}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Theme
