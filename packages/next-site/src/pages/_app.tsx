import type { AppProps } from 'next/app'
import '@moduk/frontend/dist/css/index.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.body.classList.add('js-enabled')
  }, [])
  return <Component {...pageProps} />
}
