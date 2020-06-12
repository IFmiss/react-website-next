import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME } from '@root/constance'
import Link from 'next/link'
interface HomePorps {}

const Home: NextPage<HomePorps, {}> = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true
  })


  return (
    <Layout>
      <div className={classString}>
        <Link href="/blog">
          <a>
            首页暂时没有内容哦！可以尝试查看 blog
          </a>
        </Link>
        <p>或者返回 react 第三版本地址: <a href="https://v3.daiwei.site">点击进入</a></p>
        <p>或者返回 vue 第二版本地址: <a href="https://v2.daiwei.site">点击进入</a></p>
      </div>
    </Layout>
  )
}

export default Home
