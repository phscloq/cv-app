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
    <div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
        <h3 className="text-center text-2xl font-bold">Education</h3>
         {EducationItems}
        <button onClick={onAdd}>Add Education </button>
    </div>
    )
}