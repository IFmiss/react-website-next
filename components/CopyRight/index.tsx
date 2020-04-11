import React from 'react'
import { PROJECT_NAME, COPY_RIGHT_CONFIG } from '@constance/index'
import classNames from 'classnames'
import './copy-right.less';
import Link from 'next/link'
import { formatDate } from '@utils/utils'
// import { NextPage } from 'next'

const CopyRight = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-copy-right`]: true
  })

  return (
    <footer className={classString}>
      <span className={`${classString}-info list`}>dw | © 2016 - { formatDate('yyyy', new Date()) }</span>
      <React.Fragment>
        {
          COPY_RIGHT_CONFIG && COPY_RIGHT_CONFIG.map((item) => (
            item.to.includes('http') ? (
              <a className="list" title={item.name} target="_black" key={item.name} href={item.to}>{item.name}</a>
            ) : (
              <Link key={item.name} href={item.to}>
                <a className="list" title={item.name}>{item.name}</a>
              </Link>
            )
          ))
        }
      </React.Fragment>
    </footer>
  )
}

export default CopyRight
