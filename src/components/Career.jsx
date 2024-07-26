import React from 'react'
import CareerPng from '../assets/career.png';
const Career = () => {
  return (
    <div className='py-12 sm:py-0 relative'>
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center relative z-10">
            <div className='order-2 sm:order-1 space-y-5 relative'>
                
                  <h1 data-aos='fade-up' data-aos-delay='300' className='text-4xl font-semibold'>Career in<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> 5G </span></h1>
                  <p data-aos='fade-up' data-aos-delay='600'>A career in 5G technology offers exciting opportunities in various fields, from network engineering and software development to cybersecurity and IoT integration. Professionals in this domain can work on designing and optimizing 5G networks, developing innovative applications that leverage 5G capabilities, and ensuring secure and reliable connectivity. The demand for expertise in 5G is growing across industries such as telecommunications, healthcare, automotive, and smart cities, making it a dynamic and promising field for those interested in cutting-edge technology and its transformative impact on society.</p>
                  
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-100px] left-[250px] blur-3xl opacity-50'></div>

            </div>
            
            <div data-aos='fade-up' className='order-1 sm:order-2'>
                <img src={CareerPng} alt="" className='w-full min-w-[400px] min-h-[400px]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Career
