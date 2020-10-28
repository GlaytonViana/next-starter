import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Container } from '../../styles/pages/StaticPage'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { ParsedUrlQuery } from 'querystring'

interface IUser {
  name: string
}

interface IHomeProps {
  user: IUser
}

const StaticPage = ({ user }: IHomeProps): JSX.Element => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <h1>{user.name}</h1>

      <Link href="/">Home </Link>
    </Container>
  )
}

export default StaticPage

export const getStaticPaths: GetStaticPaths = async () => {
  const names = ['GlaytonViana', 'jeffersonsalvador']

  const paths = names.map(name => {
    return {
      params: { static_dynamic: name }
    }
  })

  return {
    paths,
    fallback: true
  }
}

// O nome da variável deve ser o mesmo da página
export const getStaticProps: GetStaticProps<IHomeProps> = async context => {
  const { static_dynamic } = context.params

  const response = await fetch(`https://api.github.com/users/${static_dynamic}`)
  const user = await response.json()

  return {
    props: {
      user
    },
    revalidate: 60 * 60
  }
}
