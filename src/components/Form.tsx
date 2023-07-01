'use client'
import { useState } from "react";
import Education from "./Education";
import Experience from "./Jobs";
import GeneralInformation from "./GeneralInfo";
import Summary from "./Summary";
import Skills from "./Skills";


export default function Form({cv, onSummaryChange, onPersonChange,
    onExperienceAdd, onEducationAdd, onExperienceChange, 
    onEducationChange, onSkillSetAdd, onSkillAdd, onSkillSetChange, onSkillChange, preview}:
    {cv:any, onSummaryChange:any, onPersonChange:any, onExperienceAdd:any, onEducationAdd:any, 
        onExperienceChange:any, onEducationChange:any, onSkillSetAdd:any, onSkillAdd:any, onSkillSetChange:any,
    onSkillChange:any, preview:boolean
    }){


    return (
    <div className={`${preview ? 'hidden':''} mt-3 flex flex-col items-center  max-w-[100%] border-solid border-2 border-black bg-stone-50 rounded-xl 
    sm:block sm:flex-1  sm:my-24 sm:mx-24 sm:w-2/4`}>
      

    <GeneralInformation info={cv.personalInfo}
    onPersonChange={onPersonChange}
    />
    <Summary summaryText={cv.summary.sum} onSummaryChange={onSummaryChange} 
    />
    <Experience
    experience={cv.experience} 
    onExperienceAdd={onExperienceAdd}
    onExperienceChange={onExperienceChange}
    />
   <Education 
   education={cv.education}
   onAdd={onEducationAdd}
   onChange={onEducationChange}
   />
   <Skills
   skills={cv.skills} 
   onSkillSetAdd={onSkillSetAdd}
   onSkillAdd={onSkillAdd}
   onSkillSetChange={onSkillSetChange}
   onSkillChange={onSkillChange}
   />

   </div>)
}