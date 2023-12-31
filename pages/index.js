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
          You came into this world naked and screaming, and I hope you party just as hard tonight
I have the hottest girlfriend in town, and she has an even hotter partner. Happy birthday! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
