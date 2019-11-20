import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { HomeNav } from '@constance/nav'
import './nav.less'
import { PROJECT_NAME, WEBSITE_TITLE } from '@constance/index' 

const Nav = () => {
  const lists = HomeNav

  const classString = classNames({
    [`${PROJECT_NAME}-nav`]: true
  })

  return (
    <nav className={ classString }>
      <div className="nav-content">
        <div className="nav-logo">
          <h2 className="nav-title">{WEBSITE_TITLE}</h2>
        </div>
        <div className="nav-lists">
          {
            lists.slice().map((item: any) => {
              return (
                <Link href={item.link}
                      key={item.key}>
                  <a className="nav-list">{item.name}</a>
                </Link>
              )
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav