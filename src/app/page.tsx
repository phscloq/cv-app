import Image from 'next/image'
import GeneralInformation from '@/components/GeneralInfo'
import Education from '@/components/Education'
import Experience from '@/components/Jobs'
import Summary from '@/components/Summary'
import Skills from '@/components/Skills'
export default function Home() {
  return (
    <main className='min-h-screen max-w-fit'> 
      <div className="flex flex-col items-center my-24 mx-24 border-solid border-2 border-black">
      <GeneralInformation />
      <Summary />
      <Experience />
     <Education />
     <Skills />
     </div>
    </main>
  )
}
