import React from 'react'
import AboutPng from '../assets/About.png';
const About = () => {
  return (
    <div className='py-12 sm:py-0 relative'>
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center relative z-10">
            <div data-aos='fade-up' data-aos-once='false'>
                <img src={AboutPng} alt="" className='w-full minmax-w-[400px] min-h-[400px]' />
            </div>
            <div className='space-y-5 relative'>
                  <h1 data-aos='fade-up' data-aos-delay='300' className='text-4xl font-semibold'>What is<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> 5G </span></h1>
                  <p data-aos='fade-up' data-aos-delay='600'>5G is the 5th generation mobile network. It is a new global wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of network that is designed to connect virtually everyone and everything together including machines, objects, and devices.<br/><br/>5G wireless technology is meant to deliver higher multi-Gbps peak data speeds, ultra low latency, more reliability, massive network capacity, increased availability, and a more uniform user experience to more users. </p>
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-100px] left-[250px] blur-3xl opacity-50'></div>
                  
                   </div>

        </div>
      </div>
    </div>
  )
}

export default About
