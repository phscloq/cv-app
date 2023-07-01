
import JobsItem from "./JobsItem";
export default function Experience({experience, onExperienceAdd, onExperienceChange}:{experience:any, onExperienceAdd:any, onExperienceChange:any}){

const JobsItems=experience.map((jobsItem:any)=>{
    return (
    <JobsItem
    key={jobsItem.id}
    id={jobsItem.id}
    jobsItem={jobsItem}
    onChange={onExperienceChange}
    />
    )
})


    return (
    <div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
        <h3 className="text-center text-2xl font-bold">Experience   </h3>
        {JobsItems}
        <button className='rounded-full text-3xl leading-normal px-3.5 mx-2.5 bg-slate-300 sm:mx-5 sm:mt-2' onClick={onExperienceAdd}>+</button>
    </div>
    )
}