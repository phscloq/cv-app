    export default function Skill({onChange, index, id, skillSet}:{onChange:any, index:number, id:any, skillSet:any}){
        return (
            <input 
            className="focus:outline-none text-center bg-slate-300 " 
            type="text" placeholder="skill"
            value={skillSet[index]}
            onChange={(e)=>onChange(e, id, index)}
            ></input>
        )
    }