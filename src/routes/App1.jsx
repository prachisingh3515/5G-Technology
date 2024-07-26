import Navbar from "../components/Navbar"
import { useEffect,useState } from "react"
import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
function App() {


  

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

  

  return (
    <main className='overflow-x-hidden bg-dark text-white'>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default App
