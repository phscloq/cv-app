'use client'
import { useState} from "react"

export default function Education(){
const [isDivClicked, setIsDivClicked] = useState(true);
const [educationDiv, setEducationDiv] = useState<{}[]>([]);



const handleClick =()=>{
    setIsDivClicked(true)
 }
 const createEducationDiv=()=>{
     setEducationDiv((prevDivs) => [...prevDivs, {}]);
     console.log(educationDiv);
 }

    return (
    <div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
        <h3 className="text-center text-2xl font-bold">Education</h3>
        <div 
        
        className={`w-full p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`} >
           <div className="flex flex-col"> <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
           placeholder="School or University" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Degree and Field of Study" /></div>
           
            <div className="flex flex-col"><input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
            <input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
            type="number" placeholder="Date period" /></div>
         </div>
         {educationDiv.map((item)=>(
      
             <div key={`${Date.now().toString(36)}-${Math.random().toString(36)}`}

             className={`w-full p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`} >
                <div className="flex flex-col"> 
            <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
           placeholder="School or University" />
            <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Degree and Field of Study" /></div>
           
            <div className="flex flex-col"><input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
            type="text" placeholder="Location" />
            <input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
            type="number" placeholder="Date period" /></div>

         </div>
         ))}          
        <button onClick={createEducationDiv}>Add Education </button>
    </div>
    )
}