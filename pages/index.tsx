import React from 'react'
import { NextPage } from 'next'
import Home from '@pages/Home'
interface MainProps {
  userAgent?: string
}

const Main: NextPage<MainProps> = () => (
  <div>
    <Home/>
  </div>
)

export default Main
