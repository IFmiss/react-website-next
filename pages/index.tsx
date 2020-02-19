import React from 'react'
import { NextPage } from 'next'
import Blog from '@root/pages/Blog'
interface MainProps {
  userAgent?: string
}

const Main: NextPage<MainProps> = () => (
  <Blog/>
)

export default Main
