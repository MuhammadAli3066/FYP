import Head from 'next/head'
import Navbar from './nav'
import Footer from './footer'
import Link from 'next/link'
import Image from 'next/image'
import LoginPage from './login/page'

export default async function Home() {
  return (
    <main className="flex-col font-mono" >
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <LoginPage/>
    </main>
  )
}