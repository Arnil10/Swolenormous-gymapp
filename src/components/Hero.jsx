import React from "react"
import Button from "./Button"

export default function Hero(){

    return(
        <div className="flex flex-col flex-1 py-50 px-5 gap-1 sm:gap:3">
            <p className="uppercase max-w-screen mx-auto text-base sm:text-lg font-medium">its time to get</p>
            <h1 className="uppercase max-w-screen mx-auto font-bold text-4xl sm:text-6xl ">swole<span className="text-blue-400">normous</span></h1>
            <p className=" max-w-[800px] mx-auto text-center sm:text-lg py-10 sm:py-20">I hereby acknowledge that my days of noodle arms are numbered! I’m on a mission to build 
                    muscle, get fit, and make treadmills fear me. Soon, my biceps will demand their own zip code, 
                    and even my shadow will have abs!
            </p>
            
            <Button func={()=>{
                window.location.href='#generate'
            }
            }text={'Accept and Begin'}/>
        </div>
    )
}