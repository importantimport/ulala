import { Link } from 'waku'

const getData = async () => {
  const data = {
    body: 'The minimal React framework',
    headline: 'About Waku',
    title: 'About',
  }

  return data
}

const AboutPage = async () => {
  const data = await getData()

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link className="mt-4 inline-block underline" to="/">
        Return home
      </Link>
    </div>
  )
}

export default AboutPage

// eslint-disable-next-line react-refresh/only-export-components
export const getConfig = async () => {
  return {
    render: 'static',
  }
}
