import React from 'react'
import Head from 'next/head'

import ineoLogo from '../assets/logo.png'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Testando o next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src={ineoLogo} alt="" />
      <h1>Olá NextJS</h1>
      <p>Testando uma aplicação</p>
    </Container>
  )
}

export default Home
