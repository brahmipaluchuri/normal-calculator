import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/header'
import { Footer } from '@/components/footer'

export default function App({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />
   <Footer />
  </>
}
