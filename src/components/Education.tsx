import EducationItem from "./EducationItem"
export default function Education({education, onAdd, onChange}:{education:any, onAdd:any, onChange:any}){
    const EducationItems=education.map((educationItem:any)=>{
        return (
        <EducationItem
        key={educationItem.id}
        id={educationItem.id}
        educationItem={educationItem}
        onChange={onChange}
        />
        )
    })

    return (
    <div className="w-full mt-2.5  border-0 border-t-2 border-t-zinc-900 border-solid">
        <h3 className="text-center text-2xl font-bold">Education</h3>
         {EducationItems}
        <button className='rounded-full text-3xl leading-normal px-3.5 mx-2.5 bg-slate-300 sm:mx-5 sm:mt-2' onClick={onAdd}>+</button>
    </div>
    )
}