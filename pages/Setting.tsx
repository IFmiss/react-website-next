import React from 'react'
import Layout from '@components/Layout'
import { NextPage } from 'next'

interface SettingProps {}

const Setting: NextPage<SettingProps> = () => {
  console.log('Setting')
  return (
    <Layout title='this is Setting'>
      <div>hello this is setting</div>
    </Layout>
  )
}

export default Setting
