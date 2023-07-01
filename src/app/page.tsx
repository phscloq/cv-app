'use client'
import { v4 as uuidv4 } from 'uuid';
import Form from '@/components/Form'
import Preview from '@/components/Preview'
import { useState } from 'react'
import emptyCV from './utils/EmptyCV'
export default function Home() {
const [cv, setCv] = useState(emptyCV)
const [preview, setPreview] = useState(false)

const handlePreview=()=>{

  if(preview){
    setPreview(false);
  }
  else{
    setPreview(true);
  }
}

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

const handleSkillGroupNameChange =(e:any, id:any)=>{
setCv((prevCv)=>{
  const updatedSkills= prevCv.skills.map((skillSet:any)=>{
    if(skillSet.id === id){
      return {
        ...skillSet,
        groupName: e.target.value
      };
    }
    return skillSet;
  });
  return {...prevCv, skills: updatedSkills};
});
};
const handleSkillChange = (e: any, groupId: any, skillIndex: any) => {
  const { value } = e.target;

  setCv((prevCv: any) => {
    const updatedSkills = prevCv.skills.map((skillSet: any) => {
      if (skillSet.id === groupId) {
        const updatedSkillSet = skillSet.skillSet.map((skill: any, index: number) => {
          if (index === skillIndex) {
            return value;
          }
          return skill;
        });

        return {
          ...skillSet,
          skillSet: updatedSkillSet,
        };
      }
      return skillSet;
    });

    return { ...prevCv, skills: updatedSkills };
  });
};


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
    <main className='flex-col min-h-screen flex justify-center mt-3'>
      <div className='text-center text-4xl'>
        <h1>CV Generator</h1>
        </div> 
    <div className='ml-4 flex  flex-col sm:hidden'
    >
    <p className='ml-2'>
      Preview <label className='font-bold'>{preview ? 'on' : 'off'}</label>
    </p>
     <input
     type='checkbox' 
     checked={preview}
     onChange={handlePreview}
     className=' mt-1
       relative h-10 bg-white w-28  shadow-inner shadow-black appearance-none rounded-2xl
      before:bg-slate-500 before:absolute before:h-10 before:w-10 before:rounded-2xl
      ease-in duration-500
      before:scale-110 before:ease-in before:shadow-lg before:duration-500 before:left-0
      checked:before:left-20 checked:bg-slate-500 checked:ease-in checked:duration-500'
     />
    </div>
    <div className='flex p-2.5 sm:p-0'>
    <Form cv={cv} 
     onSummaryChange={handleSummaryChange}
     onPersonChange={handlePersonChange}
     onExperienceAdd={handleAddExperience}
     onEducationAdd={handleAddEducation}
     onExperienceChange={handleExperienceChange}
     onEducationChange={handleEducationChange}
     onSkillSetAdd={handleAddSkillSet}
     onSkillAdd={handleSkillAdd}
     onSkillSetChange={handleSkillGroupNameChange}
     onSkillChange={handleSkillChange}
     preview={preview}
     />
     <Preview cv={cv} 
          preview={preview}

     />
    </div>
    
   
    </main>
  )
}
