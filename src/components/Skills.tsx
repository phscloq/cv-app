
import SkillsSet from "./SkillSet"

export default function Skills({onSkillChange, onSkillSetChange, onSkillSetAdd, onSkillAdd, skills}:
    {onSkillSetAdd:any, onSkillAdd:any, skills:any, onSkillSetChange:any, onSkillChange:any}){
const SkillSets=skills.map((SkillSet:any)=>{
    return (
        <SkillsSet
        key={SkillSet.id}
        id={SkillSet.id}
        skillSet={SkillSet}
        onAdd={onSkillAdd}
        onChange={onSkillSetChange}
        onSkillChange={onSkillChange}
        />
    )
})


return (
<div className="w-full mt-2.5  border-0 border-t-2 border-t-zinc-900 border-solid">
    <h3 className="text-center text-2xl font-bold">Skills</h3>
    {SkillSets}
    <button onClick={onSkillSetAdd} className="text-3xl m-2 bg-slate-300 px-2">New Group</button>
</div>

)
}