import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>{process.env.SITE_TITLE} - Inicio</title>
      </Head>
    </>
  )
}
