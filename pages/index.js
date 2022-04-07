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
          <a className="active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i className='bx bxs-message-rounded opacity-100'></i></a>
          <a className="not-active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i className='bx bxs-phone opacity-25'></i></a>
          <a className="not-active flex w-12 h-12 rounded-2xl text-4xl items-center justify-center p-7"><i className='bx bxs-cog opacity-25'></i></a>
        </div>
        <Image src="/../public/adem_ilter.jpg" className="rounded-full"width={48} height={48} />
      </div>
      <div className="message-select w-1/3">
        <div className="flex flex-row justify-between items-center px-8 h-16 border-b-2 border-r-2">
          <h1 className="font-bold text-3xl">Message</h1>
          <a className="not-active flex w-12 h-12 rounded-2xl text-3xl items-center justify-center p-4"><i class='bx bxs-message-rounded-add opacity-25'></i></a>
        </div>
      </div>

    </div>    
    
    </div>

  )
}
