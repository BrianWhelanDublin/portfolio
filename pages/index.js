import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from "../lib/apolloClient";
import { HOMEPAGE_QUERY } from '../lib/queries/homepage';

export default function Home({header}) {

  console.log(header)
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian Whelan Web Developer</title>
        <meta name="description" content="Web portfolio for brian whelan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
     
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: {
       header:data.PageItem.content.body[0]
    },
  };
};