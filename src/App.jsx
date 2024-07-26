import Hero from "./components/Hero"
import Quotes from "./components/Quotes"
import About from "./components/About"
import Career from "./components/Career"
import Innovations from "./components/Innovations"
import Ask from "./components/Ask"
import Sign from "./components/Sign"
import NotificationInbox from "./components/NotificationInbox"
import { useEffect } from "react"
import './App.css'
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
      <div><Hero /></div>
      <div><Quotes /></div>
      <div><About /></div>
      <div><Career /></div>
      <div><Innovations /></div>
      <div><Ask /></div>
      <div className="App">
      <NotificationInbox />
      </div>
      <div><Sign /></div>
    </main>
  )
}

export default App
