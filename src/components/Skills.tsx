'use client'
import { useState } from "react"

export default function Skills(){

const createSkillInput=()=>{

}

return (
<div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
    <h3 className="text-center text-2xl font-bold">Skills</h3>
    <div className="pb-2 text-red-600 flex">
    <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
             <button onClick={createSkillInput}>Add</button>
    </div>
</div>

)
}