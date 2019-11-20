import Head from 'next/head'

const Header = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>this is header</p>
    </div>
  )
}

export default Header
