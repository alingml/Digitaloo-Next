import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services'; 


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(2,36,70)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Digitaloo</title>
      </Head>
      <Header />
      <section id="sectionHero" className='snap-start'>
        <Hero />
      </section>
      <section id="sectionServices" className='snap-center'>
        <Services />
      </section>
    </div>
  )
}

export default Home
