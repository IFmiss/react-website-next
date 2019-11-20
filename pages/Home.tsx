import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  console.log('home')
  return (
    <Layout title='this is Home'>
      <div>hello this is home</div>
    </Layout>
  )
}

export default Home