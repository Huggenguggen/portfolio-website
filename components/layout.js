import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";



function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Yu Heng's Portfolio</title>
      </Head>
      <div className='min-h-screen flex flex-col'>
      <Navbar />
        <main className='flex-grow'>{children}</main>
      <Footer />
      </div>
    </div>
  )
}

export default Layout;