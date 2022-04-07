import Head from 'next/head'
import Image from 'next/image'

function UserBrief({imgSrc, username, lastMessage}){
    imgSrc="/../public/dorpak.jpg"
    return(
        <div>
            <Head>

            </Head>
            <div className="flex flex-row h-max w-full items-center p-3.5">
                <div className="relative flex w-max h-max">
                    <Image src={imgSrc} className="rounded-full"width={64} height={64} />
                    <span className="absolute h-4 w-4 inset-12 rounded-full" style={{borderWidth:'2.5px', borderColor:'white', backgroundColor:'#1EE826'}}></span>
                </div>
                <div className="flex flex-col ml-3 w-8/12">
                    <p className="font-bold text-xl">{username}</p>
                    <p className="font-semibold">{lastMessage}</p>
                </div>
            </div>

        </div>
    )
}

export default UserBrief;