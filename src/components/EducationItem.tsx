export default function EducationItem({id, educationItem, onChange}:{id:any, educationItem:any, onChange:any}){

    return(
        <div className={`p-3 flex  mx-auto sm:w-11/12 sm:justify-between  sm:bg-slate-300 sm:rounded-lg sm:mt-5`} >
           <div className="flex flex-col  bg-slate-300 max-w-[60%] rounded-l-lg p-4 sm:bg-inherit"> 
       <input  className="focus:outline-none text-left bg-transparent text-2xl" 
      placeholder="School or University" 
      value={educationItem.school}
      name='school'
  
      onChange={(e)=>onChange(e,id)}
      />
       <input className="focus:outline-none text-left bg-transparent " 
       type="text" 
       placeholder="Degree and Field of Study" 
       value={educationItem.deg}
       name='deg'
   
       onChange={(e)=>onChange(e,id)}
       />
       
       </div>
      
       <div className="flex flex-col justify-between bg-slate-300 max-w-[40%] rounded-r-lg p-4 sm:bg-inherit">
        <input className="focus:outline-none text-right bg-transparent" 
       type="text" 
       placeholder="Location" 
       value={educationItem.location}
       name='location'
   
       onChange={(e)=>onChange(e,id)}
       />
       <input className="bg-transparent focus:outline-none text-right whitespace-normal break-all" 
       type="number" 
       placeholder="Date period" 
       value={educationItem.date}
       name='date'
   
       onChange={(e)=>onChange(e,id)}
       />
       </div>

    </div>
    )
}