import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
    <Head>
        <title>Create Next App</title>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
    </Head>
    <div className="message-screen flex flex-row">
      <div className="sidebar w-24 h-screen flex flex-col justify-between py-6 items-center border-r-2">
        <h1 className="font-bold text-xl" style={{color:'#0085FF'}}>Mess</h1>
        <div className="button-group flex flex-col content-evenly h-72 justify-between items-center">
          <a className="active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i class='bx bxs-message-rounded opacity-100'></i></a>
          <a className="not-active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i class='bx bxs-phone opacity-25'></i></a>
          <a className="not-active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i class='bx bxs-cog opacity-25'></i></a>
        </div>
        <Image src="/../public/adem_ilter.jpg" className="rounded-full"width={64} height={64} />
      </div>
    </div>    
    
    </div>

  )
}
