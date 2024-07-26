import React from 'react'
import prof1 from '../assets/prof1.png';
import prof2 from '../assets/prof2.png';
import prof5 from '../assets/prof5.png';

const askData = [
    {
        name: "Dasha",
        profile: prof1,
        link : "#",
    },
    {
        name: "Lena",
        profile: prof2,
        link : "#",
    },
    {
        name: "Diana",
        profile: prof5,
        link : "#",
    },
    {
        name: "Alexander",
        profile: prof2,
        link : "#",
    },
    {
        name: "Devin",
        profile: prof5,
        link : "#",
    },
    {
        name: "Lena",
        profile: prof2,
        link : "#",
    },
    {
        name: "Dasha",
        profile: prof1,
        link : "#",
    },
    {
        name: "Alexander",
        profile: prof2,
        link : "#",
    },
    {
        name: "Devin",
        profile: prof5,
        link : "#",
    },
    {
        name: "Diana",
        profile: prof1,
        link : "#",
    },
]
const Ask = () => {
  return (
    <div className='py-12 sm:py-0 min-h-[550px]'>
        <h1 data-aos='fade-up' data-aos-delay='300' className='text-3xl font-semibold text-center sm:text-4xl'>Ask The Experts</h1>
        <div class="overflow-x-auto whitespace-nowrap p-4 flex gap-10 no-scrollbar mt-20">
        {askData.map((data)=>(
            <div data-aos='fade-up' data-aos-delay='500' className='h-[300px] w-[400px] hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300'>
            <div className='h-[200px] w-[300px]'>
                <img src={data.profile} alt="" className='h-[200px] w-[250px]' />
            </div>
            <h1 className='text-2xl text-center mt-3'>{data.name}</h1>
            <a href={data.link} className='text-lg font-semibold py-3 text-primary'><p className='text-center hover:text-white hover:bg-black duration-300'>Connect</p></a>
            </div>
        ))}
        </div>
    </div>
    
  )
}

export default Ask
