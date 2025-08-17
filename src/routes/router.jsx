import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TermsOfService from '../Pages/Terms_of_Service'
import PrivacyPolicy from '../Pages/Privacy_Policy'
import Schedule from '../Pages/Schedule'
import Home from '../Pages/Home'
import Resources from '../Pages/Resources'
import Layout from '../layout'
import About from '../Pages/About'
import Chatbot from '../Pages/Chatbot'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
  <Route path='' element={<Home />} />
  <Route path='resources' element={<Resources />} />
  <Route path='about' element={<About />} />
  <Route path='schedule' element={<Schedule />} />
  <Route path='chatbot' element={<Chatbot />} />
  <Route path='terms' element={<TermsOfService />} />
  <Route path='privacy' element={<PrivacyPolicy />} />
  <Route path='*' element={<div className="text-center text-2xl py-20">404 - Page Not Found</div>} />

    </Route>
  )
)

export default router;
