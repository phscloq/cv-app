export default function EducationItem({id, educationItem, onChange}:{id:any, educationItem:any, onChange:any}){

    return(
        <div className={`p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`} >
           <div className="flex flex-col"> 
       <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
      placeholder="School or University" 
      value={educationItem.school}
      name='school'
  
      onChange={(e)=>onChange(e,id)}
      />
       <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
       type="text" 
       placeholder="Degree and Field of Study" 
       value={educationItem.deg}
       name='deg'
   
       onChange={(e)=>onChange(e,id)}
       />
       
       </div>
      
       <div className="flex flex-col">
        <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
       type="text" 
       placeholder="Location" 
       value={educationItem.location}
       name='location'
   
       onChange={(e)=>onChange(e,id)}
       />
       <input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
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