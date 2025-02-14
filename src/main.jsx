import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom';
import Hello from './screens/Hello.jsx';
import Homepage from './screens/Homepage.jsx';
import Hindi from './screens/Hindi.jsx';
import Chinese from './screens/Chinese.jsx';
import French from './screens/French.jsx';
import Spanish from './screens/Spanish.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<Homepage/>}></Route>
      <Route path="/hello" element={<Hello/>}></Route>
      <Route path = "/hindi" element= {<Hindi/>}></Route>
      <Route path = "/chinese" element= {<Chinese/>}></Route>
      <Route path = "/french" element= {<French/>}></Route>
      <Route path = "/spanish" element= {<Spanish/>}></Route>
    </Route>
    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
