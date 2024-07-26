import { FaGamepad } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

const InnovData= [
    {
        name: "Immersive Gaming",
        icon : (
            <FaGamepad className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        desc: "Low-latency, high-bandwidth support for cloud gaming and interactive experiences.",
        aosDelay: '300',
    },
    {
        name: "Smart Cities",
        icon : (
            <FaCity className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        desc: " Improved urban infrastructure with real-time data management for traffic, safety, and energy.",
        aosDelay: '500',
    },
    {
        name: "Autonomous Vehicles",
        icon : (
            <FaCar className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        desc: "Reliable, low-latency communication for safe and efficient self-driving cars.",
        aosDelay:'700',
    },
]
const Innovations = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
            <h1 data-aos='fade-up' className="text-3xl font-semibold text-center sm:text-4xl">Innovations by <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>  5G Technology</span></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20">
                {InnovData.map((data)=>(
                   <div data-aos='fade-up' data-aos-delay={data.aosDelay} className="text-center group space-y-3 sm:space-y-6 p-4 sm-py-10 bg-light hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300">
                    <div className="grid place-items-center">{data.icon}</div>
                    <h1 className="text-2xl">{data.name}</h1>
                    <p>{data.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Innovations
