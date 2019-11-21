import React from 'react'
import { PROJECT_NAME, COPY_RIGHT_CONFIG } from '@constance/index'
import classNames from 'classnames'
import './copy-right.less';
import Link from 'next/link'
const { formatDate } = require('d-utils/lib/genericUtils')
// import { NextPage } from 'next'

const CopyRight = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-copy-right`]: true
  })

  return (
    <div className={classString}>
      <span className={`${classString}-info list`}>© 2016 - { formatDate('yyyy', new Date()) } from dw</span>
      <React.Fragment>
        {
          COPY_RIGHT_CONFIG.map((item) => (
            item.to.includes('http') ? (
              <a className="list" target="_black" key={item.name} href={item.to}>{item.name}</a>
            ) : (
              <Link key={item.name} href={item.to}>
                <a className="list">{item.name}</a>
              </Link>
            )
          ))
        }
      </React.Fragment>
    </div>
  )
}

export default CopyRight
