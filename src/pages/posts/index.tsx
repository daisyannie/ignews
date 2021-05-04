import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais apresenta tendências no sentido de aprovar a manutenção do sistema de participação geral.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais apresenta tendências no sentido de aprovar a manutenção do sistema de participação geral.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Título do post</strong>
            <p>O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais apresenta tendências no sentido de aprovar a manutenção do sistema de participação geral.</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}