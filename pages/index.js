import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FANGROUP</title>
      </Head>
      <main>
        <Header title="Welcome to Event Manager System!" />
      </main>
      <Footer />
    </div>
  )
}
