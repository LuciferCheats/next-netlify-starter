import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Happy Birthday Kirti Baby 💋</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Birthday Girl!" />
        <p className="description">
          Wait For It <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
