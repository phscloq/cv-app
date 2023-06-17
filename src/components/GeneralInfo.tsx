'use client'
import { useState } from "react"
export default function GeneralInformation(){

    const [isDivClicked, setIsDivClicked] = useState(false);

    const handleClick = ()=>{
setIsDivClicked(true)    }
    return (

        <div className={`w-full p-3 text-red-600 flex flex-col ${isDivClicked ? 'ring-2 ring-red-600': ''}`} onClick={handleClick}>
            <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-3xl" placeholder="Your Name" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" type="text" placeholder="The role you are applying" />
            <div className="flex justify-center">
            <input className="focus:outline-none text-center  bg-transparent placeholder:text-red-600" type="email" placeholder="mail" />
            <input className="focus:outline-none text-center bg-transparent  placeholder:text-red-600" type="tel" placeholder="phone" /></div>
         </div>

    )
}