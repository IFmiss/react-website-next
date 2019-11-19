import React from 'react'
import { NextPage } from 'next'
import Nav from '@components/Nav'

interface HomeProps {
  userAgent?: string
}

const Home: NextPage<HomeProps> = () => (
  <div>
    <Nav/>
    1111
  </div>
)

export default Home
