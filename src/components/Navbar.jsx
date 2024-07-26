import { useState } from 'react';
import logo from '../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
const Navbar = () => {



  const [showMenu,setShowMenu]= useState(false);
  const toggleMenu=()=> setShowMenu(!showMenu);
  return (
    <div>
      <div className='container py-2 md:py-0 md:mt-10'>
        <div className="flex justify-between items-center">
            <div className='flex items-center gap-0 '>
                <img src={logo} alt="" className='h-16' />
                <p className='text-3xl'> 5G <span className='font-bold'>Hub</span></p>
            </div>
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        <li className='py-4'><Link to="/" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>Home</Link></li>
                        <li className='py-4'><Link to="/about" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>About</Link></li>
                        <li className='py-4'><Link to="/career" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500 '>Career</Link></li>
                        <li className='py-4'><Link to="/innovations" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>Innovations</Link></li>
                        <li className='py-4'><Link to="/ask" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>Ask</Link></li>
                        <li className='py-4'><Link to="/notify" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>Notifications</Link></li>
                        <li className='py-4'><Link to="/sign-up" className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>Sign up</Link></li>
                    </ul>
                </nav>
                <div className='md:hidden block' >
                  {
                    showMenu? <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30} /> : <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30}/>
                  }
                   {showMenu && (
          <div className="fixed right-5 z-20 bg-neutral-900 p-8 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <Link to='/'>Home </Link>
              </li>
              <li className="py-4">
                <Link to="/about">About </Link>
              </li>
              <li className="py-4">
                <Link to="/career">Career </Link>
              </li>
              <li className="py-4">
                <Link to="/innovations">Innovations </Link>
              </li>
              <li className="py-4">
                {" "}
                <Link to="/ask">Ask </Link>
              </li>
              
          
            </ul>
            <div className="items-center space-x-6 mt-2">
              <Link to="/sign-up" className="py-2 px-3 border border-blue-500 rounded-md ">
                Sign up
              </Link>
             
            </div>
          </div>
        )}
                </div>
                
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
