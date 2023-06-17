'use client'
import { useState} from "react"

export default function Experience(){
const [isDivClicked, setIsDivClicked] = useState<string | null>(null);
const [experienceDiv, setExperienceDiv] = useState<{id: string}[]>([]);

const handleClick =(id:string)=>{
   setIsDivClicked(id)
}
const createExperienceDiv=()=>{
    const newJob = { id: `jobs-${experienceDiv.length + 1}`};
    setExperienceDiv((prevDivs) => [...prevDivs, newJob]);
}

    return (
    <div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
        <h3 className="text-center text-2xl font-bold">Experience   </h3>
        <div
       
         className={`w-full p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`} onClick={()=>handleClick('jobs-main')}>
           <div className="flex flex-col"> <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
           placeholder="Company Name" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Title" /></div>
           
            <div className="flex flex-col"><input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
            <input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
            type="number" placeholder="Date period" /></div>
         </div>
         {experienceDiv.map((job)=>(
             <div   key={job.id}  className={`w-full p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`} onClick={()=>handleClick(job.id)}>
                <div className="flex flex-col"> <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
           placeholder="Company Name" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Title" /></div>
           
            <div className="flex flex-col"><input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
            <input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
            type="number" placeholder="Date period" /></div>
         </div>
         ))}
        <button onClick={createExperienceDiv}>Add Experience </button>
    </div>
    )
}