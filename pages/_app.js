import '../styles/globals.css'
import { ThemeProvider } from "../src/ThemeProvider"

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme="dark"><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
