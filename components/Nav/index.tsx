import React, { useEffect } from 'react'
import classNames from 'classnames'
import './nav.less'
import {
  PROJECT_NAME,
  WEBSITE_TITLE
} from '@constance/index' 
import Link from 'next/link'

const Nav = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-nav`]: true
  })

  return (
    <nav className={ classString }>
      <div className="nav-content">
        <div className="nav-logo">
          <Link href="/blog">
            <a>
              <h2 className="nav-title">{WEBSITE_TITLE}</h2>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav