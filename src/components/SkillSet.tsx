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
    <div className="pb-2 m-2  flex  flex-col gap-4">
    <div>
    <input 
    className="focus:outline-none bg-slate-300 text-xl" 
            type="text" placeholder="GroupName"
            name='groupName'
            value={skillSet.groupName}
            onChange={(e)=>onChange(e,id)}
            />
    <button className='bg-slate-300 rounded-full px-2 font-bold text-2xl ml-2' onClick={()=>onAdd(id)}>+</button>
    </div>
    
            <div className=" flex flex-wrap gap-2">
            {LoadSkills}
           
            </div>
          
          
         
           
    </div>
)
}