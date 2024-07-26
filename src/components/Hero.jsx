import HeroPng from '../assets/hero.png'
const Hero = () => {
  return (
    <>
    
      <div className='py-12 sm:py-0 overflow-hidden'>
        <div className='container min-h-[700px] flex relative'>
            <div className='md:mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10'>
                <div className='order-2 sm:order-1 space-y-5'>
                  <h1 data-aos='fade-up' data-aos-delay='600' className='text-4xl font-semibold'>Discover 5G: The Next Era of <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> Mobile Communication </span></h1>
                  <button data-aos='fade-up' data-aos-delay='600' className='bg-gradient-to-r from-primary to-secondary duration-300 py-2 px-6 text-white rounded-full hover:scale-105'>Get Started</button>
                </div>
                <div data-aos='fade-up' data-aos-offset='0' className='order-1 sm:order-2'>
                    <img src={HeroPng} alt="" />
                </div>

            </div>
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'></div>
        </div>
      </div>
    </>
  )
}

export default Hero
