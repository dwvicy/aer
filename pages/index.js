import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, ButtonGroup, Box } from "@chakra-ui/react"
import { FaGoogle, FaGooglePlus, FaGooglePlusG, FaGooglePlusSquare } from "react-icons/fa"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>aer | save yourself</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Aer</span>
        </h1>

        <p className={styles.description}>
        a powerful climate footprint tracker
        </p>


        <Button className={styles.button}
        
        bgGradient="linear(to-r, #dd4b39, #ea5753)"
  _hover={{
    bgGradient: "linear(to-l, #dd4b39, #ea5753)",
  }} leftIcon={<FaGoogle />}
  textColor="#fff"
  >
    Sign up with Google
  </Button>
     
      </main>

      <footer className={styles.footer}>
        <a
          href="https://linktr.ee/dwvicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by dwvicy
          
        </a>
      </footer>
    </div>
  )
}
