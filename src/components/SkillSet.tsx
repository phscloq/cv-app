import Skill from "./SkillSetItem"
import { v4 as uuidv4 } from 'uuid';

export default function SkillsSet({skillSet, id, onAdd}:{skillSet:any, id:any, onAdd:any}){
const LoadSkills= skillSet.skillSet.map((skillItem:any)=>{
return (
    <Skill 
    key={uuidv4()}
    />
)
})
return (
    <div className="pb-2 text-red-600 flex">
    <input className="focus:outline-none text-center bg-slate-300 m-2 placeholder:text-red-600" 
            type="text" placeholder="GroupName"
            name='groupName'
            />
            {LoadSkills}
            <button className='bg-slate-300' onClick={()=>onAdd(id)}>Add</button>
    </div>
)
}