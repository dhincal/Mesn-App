import Head from 'next/head'
import Image from 'next/image'

export default function UserBrief(imgSrc){
    imgSrc="/../public/dorpak.jpg"
    return(
        <div>
            <Head>

            </Head>
            <div className="flex flex-row h-max items-center">
                <div className="relative flex w-max h-max">
                    <Image src={imgSrc} className="rounded-full"width={48} height={48} />
                    <span className="absolute h-3.5 w-3.5 inset-8 rounded-full" style={{borderWidth:'2.5px', borderColor:'white', backgroundColor:'#1EE826'}}></span>
                </div>
            </div>

        </div>
    )
}