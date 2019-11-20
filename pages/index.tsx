import React from 'react'
import { NextPage } from 'next'
import Home from '@pages/Home'
import './../style/common.less'
import './../style/index.less'
interface MainProps {
  userAgent?: string
}

const Main: NextPage<MainProps> = () => (
  <div>
    <Home/>
  </div>
)

export default Main
