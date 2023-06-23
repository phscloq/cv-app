
import SkillsSet from "./SkillSet"

export default function Skills({onSkillSetAdd, onSkillAdd, skills}:{onSkillSetAdd:any, onSkillAdd:any, skills:any}){
const SkillSets=skills.map((SkillSet:any)=>{
    return (
        <SkillsSet
        key={SkillSet.id}
        id={SkillSet.id}
        skillSet={SkillSet}
        onAdd={onSkillAdd}
        />
    )
})


return (
<div className="w-full border-0 border-t-2 border-t-zinc-900 border-solid">
    <h3 className="text-center text-2xl font-bold">Skills</h3>
    {SkillSets}
    <button onClick={onSkillSetAdd} className="text-3xl bg-slate-300 px-2">+</button>
</div>

)
}