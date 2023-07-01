export default function JobsItem({id, jobsItem, onChange}:{id:any, jobsItem:any, onChange:any}){

return (
    <div className={`p-3 flex mx-auto sm:w-11/12 sm:bg-slate-300 sm:justify-between sm:rounded-lg sm:mt-5`}>
    <div className="flex flex-col bg-slate-300  max-w-[60%] rounded-l-lg p-4 sm:bg-inherit"> 
    <input  className="focus:outline-none text-left bg-transparent text-2xl" 
    placeholder="Company Name" 
    value={jobsItem.company}
    name='company'

    onChange={(e)=>onChange(e,id)}
    />

    <input className="focus:outline-none text-left bg-transparent " 
    type="text" 
    placeholder="Title"
    value={jobsItem.title}
    name='title'
    onChange={(e)=>onChange(e,id)} 
    />
    </div>

    <div className="flex flex-col justify-between  max-w-[40%] p-4 bg-slate-300 rounded-r-lg sm:bg-inherit">
    <input className="focus:outline-none text-right bg-transparent " 
type="text" 
placeholder="Location"
value={jobsItem.location}
name='location'

onChange={(e)=>onChange(e,id)}
/>

<input className="bg-transparent focus:outline-none text-right whitespace-normal break-all" 
type="text"
placeholder="Date period" 
value={jobsItem.date}
name='date'

onChange={(e)=>onChange(e,id)}
/>
</div>
</div>
)

}