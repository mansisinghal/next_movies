import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import router from "next/router"
import {useEffect} from "react"

export default function Home() {
  useEffect(() => {
    router.push('/signup')
  }, [])
  return (
    <div className={styles.container}>
      <p>Taking you back to signup.......</p>
    </div>
  )
}
