import {
  NextPage
} from 'next'

const Error: NextPage<any, any> = (props) => {
  return (
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error