export default function JobsItem({id, jobsItem, onChange}:{id:any, jobsItem:any, onChange:any}){

return (
    <div className={`p-3 text-red-600 flex justify-between bg-slate-300	m-4 mx-auto w-11/12 rounded-lg`}>
    <div className="flex flex-col"> 
    <input  className="focus:outline-none text-center bg-transparent placeholder:text-red-600 text-2xl" 
    placeholder="Company Name" 
    value={jobsItem.company}
    name='company'

    onChange={(e)=>onChange(e,id)}
    />

    <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
    type="text" 
    placeholder="Title"
    value={jobsItem.title}
    name='title'
    onChange={(e)=>onChange(e,id)} 
    />
    </div>

    <div className="flex flex-col">
    <input className="focus:outline-none text-center bg-transparent placeholder:text-red-600" 
type="text" 
placeholder="Location"
value={jobsItem.location}
name='location'

onChange={(e)=>onChange(e,id)}
/>

<input className="bg-transparent focus:outline-none text-center  placeholder:text-red-600" 
type="number" 
placeholder="Date period" 
value={jobsItem.date}
name='date'

onChange={(e)=>onChange(e,id)}
/>
</div>
</div>
)

}