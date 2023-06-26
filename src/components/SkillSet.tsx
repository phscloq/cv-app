import Skill from "./SkillSetItem"
import { v4 as uuidv4 } from 'uuid';

export default function SkillsSet({skillSet, id, onAdd, onChange, onSkillChange}:{skillSet:any, id:any, onAdd:any, onChange:any, onSkillChange:any}){
const LoadSkills= skillSet.skillSet.map((skill:string, index:number)=>{
return (
    <Skill 
    key={index}
    onChange={onSkillChange}
    id={id}
    skillSet={skillSet.skillSet}
    index={index}
    />
)
})
return (
    <div className="pb-2 text-red-600 flex flex-wrap gap-2">
    <input className="focus:outline-none text-center bg-slate-300 m-2 placeholder:text-red-600" 
            type="text" placeholder="GroupName"
            name='groupName'
            value={skillSet.groupName}
            onChange={(e)=>onChange(e,id)}
            />
            {LoadSkills}
            <button className='bg-slate-300' onClick={()=>onAdd(id)}>Add</button>
    </div>
)
}