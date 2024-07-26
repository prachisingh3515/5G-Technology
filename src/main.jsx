import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App1 from './routes/App1.jsx'
import './index.css'
import About from './components/About.jsx'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import Career from './components/Career.jsx'
import Innovations from './components/Innovations.jsx'
import Ask from './components/Ask.jsx'
import Sign from './components/Sign.jsx'
import NotificationInbox from './components/NotificationInbox.jsx'

const router =createBrowserRouter([
  {path: "/",
    element: <App1/>,
    children: [
  {path:"/", element : <App/>},
  {path: "/about", element: <About/>},
  {path: "/career", element: <Career/>},
  {path: "/innovations", element: <Innovations/>},
  {path: "/ask", element: <Ask/>},
  {path: "/notify", element: <NotificationInbox/>},

  {path: "/sign-up", element: <Sign/>}

  ],},
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
