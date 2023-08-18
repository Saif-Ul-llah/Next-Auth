// pages/_app.js


import { Provider } from 'next-auth/react'

function MyApp({ session, Component, pageProps }) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
