import Head from 'next/head'
import Image from 'next/image'

function LastTimeHandler(time){
    
    if(parseInt(time) <= 60){ //Convert time to minutes
        return time+"m";
    }
    else if(parseInt(time / 60) <= 24){ //Convert time to hours
        return parseInt(time / 60)+"h";
    }
    else if(parseInt(time / 60) >= 24 && (parseInt(time/60)/24 < 7)){ //Convert time to days
        var days = parseInt(time / 60) / 24;
        return days + "d";
    }
    else if((parseInt(time/60)/24 >= 7) && (parseInt(time/60)/24)/30 < 1){ //Convert time to weeks
       var weeks = (parseInt(time/60)/24)/7;
       return weeks + "w";
    }
    else if((parseInt(time/60)/24)/30 >= 1 && parseInt(time/60/24/30/12) < 1){ //Convert time to months
        var months = parseInt(time/60/24/30);
        return months + "mo"
    }
    else{ // Convert Time to years
        var years = parseInt(time/60/24/30/12);
        return years + "y";
    }
}

function UserBrief({imgSrc, username, lastMessage, unreadMessageCount, lastTime}){
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
                <div className="flex flex-col justify-between h-16 right-0 ">
                    <p className="font-semibold text-center">{LastTimeHandler(lastTime)}</p>
                    <p className="font-semibold text-center p-1 w-7 text-l rounded-lg" style={{backgroundColor:'#0085FF', color:'#FFFFFF'}}>{unreadMessageCount}</p>
                </div>
            </div>

        </div>
    )
}

export default UserBrief;