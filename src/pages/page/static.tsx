import React from 'react'
import { GetStaticProps } from 'next'

import { Container } from '../../styles/pages/StaticPage'
import Link from 'next/link'

interface IUser {
  name: string
}

interface IHomeProps {
  user: IUser
}

const StaticPage = ({ user }: IHomeProps): JSX.Element => {
  return (
    <Container>
      <h1>{user.name}</h1>

      <Link href="/">Home </Link>
    </Container>
  )
}

export default StaticPage

export const getStaticProps: GetStaticProps<IHomeProps> = async context => {
  const response = await fetch('https://api.github.com/users/GlaytonViana')
  const user = await response.json()

  return {
    props: {
      user
    },
    revalidate: 60 * 60
  }
}
