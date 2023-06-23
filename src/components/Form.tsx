'use client'
import { useState } from "react";
import Education from "./Education";
import Experience from "./Jobs";
import GeneralInformation from "./GeneralInfo";
import Summary from "./Summary";
import Skills from "./Skills";


export default function Form({cv, onSummaryChange, onPersonChange,
    onExperienceAdd, onEducationAdd, onExperienceChange, onEducationChange, onSkillSetAdd, onSkillAdd}:
    {cv:any, onSummaryChange:any, onPersonChange:any, onExperienceAdd:any, onEducationAdd:any, onExperienceChange:any, onEducationChange:any, onSkillSetAdd:any, onSkillAdd:any}){


    return (
    <div className="flex flex-col items-center  my-24 mx-24 border-solid border-2 border-black">
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
   />
   </div>)
}