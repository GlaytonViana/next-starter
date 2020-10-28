import React from 'react'
import Head from 'next/head'

import { Container, Avatar } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface IUser {
  name: string
  avatar_url: string
}

interface IHomeProps {
  user: IUser
}

const Home = ({ user }: IHomeProps): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Testando o next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{user.name}</p>
      <Avatar>
        <img src={user.avatar_url} alt="Avatar" />
      </Avatar>

      <Link href="/page/static">LINK</Link>
    </Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('https://api.github.com/users/GlaytonViana')
  const user = await response.json()

  return {
    props: {
      user
    }
  }
}
