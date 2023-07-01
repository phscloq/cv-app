'use client'
import { useState } from "react"
export default function GeneralInformation({info, onPersonChange}:{info:any, onPersonChange:any}){


    const handlePersonChange = (e:any) => {
        const { value, name } = e.target;
        onPersonChange(name, value);
    };

    return (

        <div className={`w-full p-3  flex flex-col `}>
            <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-3xl" 
            placeholder="Your Name" 
            value={info.name}
            name='name'
            onChange={handlePersonChange}

            />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" type="text" 
            placeholder="The role you are applying" 
            value={info.role}
            name='role'
            onChange={handlePersonChange}

            />
            <div className="flex justify-center">
            <input className="focus:outline-none text-center  bg-transparent placeholder:text-red-600" type="email"
             placeholder="mail" 
             value={info.email}
             name='email'
             onChange={handlePersonChange}
             />
            <input className="focus:outline-none text-center bg-transparent  placeholder:text-red-600" type="tel" 
            placeholder="phone" 
            value={info.phone}
            name='phone'
            onChange={handlePersonChange}
            /></div>
         </div>

    )
}