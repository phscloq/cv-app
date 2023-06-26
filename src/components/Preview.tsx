export default function Preview({cv}:{cv:any}){
    const { personalInfo, summary, experience, education, skills } = cv;

const allExperience= experience.map((experienceItem:any)=>{
                return(
                    <div className="flex justify-between mt-4">
                        <div>
                        <p className="font-bold text-xl">{experienceItem.company=='' ? 'Company': experienceItem.company}</p>
                        <p>{experienceItem.title=='' ? 'Title': experienceItem.title}</p>
                        </div>
                        <div>
                        <p>{experienceItem.location=='' ? 'Location': experienceItem.location}</p>
                        <p>{experienceItem.date=='' ? 'dd/MM/YYYY': experienceItem.date}</p>
                        </div>
                    </div>
                )
})

const allEducation= education.map((educationItem:any)=>{
    return(
        <div className="flex justify-between  mt-4">
            <div>
            <p className="font-bold text-xl">{educationItem.school=='' ? 'School': educationItem.school}</p>
            <p>{educationItem.deg=='' ? 'Degree': educationItem.deg}</p>
            </div>
            <div>
            <p>{educationItem.location=='' ? 'Location': educationItem.location}</p>
            <p>{educationItem.date=='' ? 'dd/MM/YYYY': educationItem.date}</p>
            </div>
        </div>
    )
})
const allSkills= skills.map((skillItem:any)=>{
    return(
        <div className="border-0 border-solid border-b-2 border-b-zinc-900">
            <div>
            <p>{skillItem.groupName == '' ? 'Group Name:' : skillItem.groupName+ ': '}</p>
            </div>
            <div className="flex flex-wrap gap-2">
         {skillItem.skillSet.map((skill:any, index:any)=>{
           return <p key={skillItem.groupName-index}>{skill==''? 'skill': skill}</p>
         })}
            </div>
        </div>
    )
})

    return (
      <div className="shadow-custom w-2/4 my-24 mx-24 p-8 bg-stone-50 flex-1 h-fit">
        <div className="text-center">
            <div className=""> 
                <h1 className="text-6xl">{personalInfo.name=='' ? 'Your Name': personalInfo.name}</h1>
                <h3 className="text-2xl">{personalInfo.role=='' ? 'Role': personalInfo.role}</h3>
            </div>
            <div className="mt-10 flex justify-center">
                <p className="">{personalInfo.email=='' ? 'example@email.com': personalInfo.email}</p>
                <p className="mx-4">{personalInfo.phone=='' ? '+111111111': personalInfo.phone}</p>
            </div>
        </div>

        <div className="mt-8">
            <p className="text-sm">{summary.sum==''? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, perferendis voluptate omnis quae reprehenderit. Vel excepturi earum quasi quibusdam dolor quisquam, maiores enim exercitationem assumenda, natus ea officiis provident!': summary.sum}</p>
        </div>

        <div className="mt-10">
        <h1 className="text-2xl text-sky-600 font-semibold">Experience</h1>
           {allExperience}
        </div>
        <div className="mt-10">
            <h1 className="text-2xl text-sky-600 font-semibold">Education</h1>
            {allEducation}
        </div>
        <div className="mt-10">
        <h1 className="text-2xl text-sky-600 font-semibold">Skills</h1>

        {allSkills}
        </div>

  
      </div>
    );
}


