import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import dynamic from "next/dynamic";

const App = dynamic(
  () => {
    return import("./App");
  },
  { ssr: false }
);


const Home: NextPage = () => {
  return (
   <App />
  )
}

export default Home
