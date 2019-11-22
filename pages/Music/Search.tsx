import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/Layout'

interface MusicProps {}

const Music: NextPage<MusicProps> = () => {
  console.log('Music')
  return (
    <Layout title='this is Music'>
      <div>hello this is Music search</div>
    </Layout>
  )
}

export default Music