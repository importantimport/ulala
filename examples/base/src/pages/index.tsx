import { Link } from 'waku'

import { Counter } from '../components/counter'

const getData = async () => {
  const data = {
    body: 'Hello world!',
    headline: 'Waku',
    title: 'Waku',
  }

  return data
}

const HomePage = async () => {
  const data = await getData()

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link className="mt-4 inline-block underline" to="/about">
        About page
      </Link>
    </div>
  )
}

export default HomePage

// eslint-disable-next-line react-refresh/only-export-components
export const getConfig = async () => {
  return {
    render: 'static',
  }
}
