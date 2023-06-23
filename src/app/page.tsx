'use client'
import { v4 as uuidv4 } from 'uuid';
import Form from '@/components/Form'
import Preview from '@/components/Preview'
import { useState } from 'react'
import emptyCV from './utils/EmptyCV'
export default function Home() {
const [cv, setCv] = useState(emptyCV)

const handleSummaryChange = (text: string) => {
  setCv((prevCv) => ({
    ...prevCv,
    summary: {
      sum: text,
    },
  }));
};

const handlePersonChange = (name:string, text: string) => {
  setCv((prevCv) => ({
    ...prevCv,
    personalInfo: {
      ...prevCv.personalInfo,
      [name]: text,
    },
  }));
};

const handleAddExperience = ()=>{
setCv((prevCv)=>({
  ...prevCv,
  experience:[
    ...prevCv.experience,
    {
      id:uuidv4(),
      company:'',
      title:'',
      location:'',
      date:'',
    },
  ],

}))
};
const handleAddEducation = ()=>{
  setCv((prevCv)=>({
    ...prevCv,
    education:[
      ...prevCv.education,
      {
        id:uuidv4(),
        school:'',
        deg:'',
        location:'',
        date:'',
      },
    ],
  
  }))
  };

  const handleAddSkillSet = ()=>{
    setCv((prevCv)=>({
      ...prevCv,
      skills:[
        ...prevCv.skills,
        {
          id:uuidv4(),
         groupName:'',
          skillSet:[],
        },
      ],
    
    }))
    };

/* const handleSkillChange =(text:string, id:any)=>{
setCv((prevCv)=>{
 prevCv.skills.map((skillSet:any) => {
    if(skillSet.id === id){
      const updatedSkill = skillSet.skillSet.map((skillItem:any)=>{
        if(skillItem.id===id)
      })
    }
  })
})
} */

    const handleSkillAdd = (id:any) => {
      setCv((prevCv) => {
        const updatedSkills = prevCv.skills.map((skillSet:any) => {
          if (skillSet.id === id) {
            return {
              ...skillSet,
              skillSet: [...skillSet.skillSet, ''],};
          }
          return skillSet;
        });
    
        return { ...prevCv, skills: updatedSkills };
      });
    };

  const handleExperienceChange = (e:any, id:any) => {
    const { name, value } = e.target;
  
    setCv((prevCv) => {
      const updatedExperience = prevCv.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
  
      return { ...prevCv, experience: updatedExperience };
    });
  };
  
  const handleEducationChange = (e:any, id:any) => {
    const { name, value } = e.target;
  
    setCv((prevCv) => {
      const updatedEducation = prevCv.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
  
      return { ...prevCv, education: updatedEducation };
    });
  };
  

  return (
    <main className='min-h-screen flex justify-center'> 
     <Form cv={cv} 
     onSummaryChange={handleSummaryChange}
     onPersonChange={handlePersonChange}
     onExperienceAdd={handleAddExperience}
     onEducationAdd={handleAddEducation}
     onExperienceChange={handleExperienceChange}
     onEducationChange={handleEducationChange}
     onSkillSetAdd={handleAddSkillSet}
     onSkillAdd={handleSkillAdd}
     />
     <Preview cv={cv} />
    </main>
  )
}
