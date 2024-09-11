import type { ReactNode } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import '../styles.css'

interface RootLayoutProps { children: ReactNode }

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  }

  return data
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData()

  return (
    <html>
      <head></head>
      <body>
        <div className="font-['Nunito']">
          <meta content={data.description} property="description" />
          <link href={data.icon} rel="icon" type="image/png" />
          <Header />
          <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout

// eslint-disable-next-line react-refresh/only-export-components
export const getConfig = async () => {
  return {
    render: 'static',
  }
}
