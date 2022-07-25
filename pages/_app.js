import { ThemeProvider } from 'next-themes'; 
import '../styles/globals.css';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider attribute='class'>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  )
}

export default MyApp
