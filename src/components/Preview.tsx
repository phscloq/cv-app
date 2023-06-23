export default function Preview({cv}:{cv:any}){
    const { personalInfo, summary, experience, education, skills } = cv;

const allExperience= experience.map((experienceItem:any)=>{
                return(
                    <div className="flex justify-between mt-4">
                        <div>
                        <p className="font-bold text-xl">{experienceItem.company}</p>
                        <p>{experienceItem.title}</p>
                        </div>
                        <div>
                        <p>{experienceItem.location}</p>
                        <p>{experienceItem.date}</p>
                        </div>
                    </div>
                )
})

const allEducation= education.map((educationItem:any)=>{
    return(
        <div className="flex justify-between">
            <div>
            <p className="font-bold text-xl">{educationItem.school}</p>
            <p>{educationItem.deg}</p>
            </div>
            <div>
            <p>{educationItem.location}</p>
            <p>{educationItem.date}</p>
            </div>
        </div>
    )
})
const allSkills= skills.map((skillItem:any)=>{
    return(
        <div>
            <div>
            <p>{skillItem.groupName}</p>
            <p>{skillItem.deg}</p>
            </div>
            <div>
            <p>{skillItem.location}</p>
            <p>{skillItem.date}</p>
            </div>
        </div>
    )
})

    return (
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg p-8">
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
            <p className="text-sm">{summary.sum}</p>
        </div>

        <div className="mt-10">
        <h1 className="text-2xl text-sky-600 font-semibold">Experience</h1>
           {allExperience}
        </div>
        <div className="mt-10">
            <h1 className="text-2xl text-sky-600 font-semibold">Education</h1>
            {allEducation}
        </div>
  
  
      </div>
    );
}


