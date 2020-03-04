import React from 'react'
import classNames from 'classnames'
import './nav.less'
import {
  PROJECT_NAME,
  WEBSITE_TITLE
} from '@constance/index' 

// import Theme from '@components/Theme'

const Nav = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-nav`]: true
  })

  return (
    <nav className={ classString }>
      <div className="nav-content">
        <div className="nav-logo">
          <h2 className="nav-title">{WEBSITE_TITLE}</h2>
        </div>
        {/* <span>
          <Theme/>
        </span> */}
      </div>
    </nav>
  )
}

export default Nav