import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./screens/Home";
import About from "./screens/About";
import './app.css';
import { ContactLayout } from "./layout/ContactLayout";
import Mail from "./screens/Mail";
import Phone from "./screens/Phone";
import PageNotFound from "./screens/PageNotFound";
import CareersLayout from "./layout/CareersLayout";
import Careers, { careerLoader } from "./screens/Careers";
import CareerError from "./screens/CareerError";
import CareerDetails, { jobDetailsLoader } from "./screens/CareerDetails";
import JobApplication from "./components/JobApplication";
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path ='/' element={<Rootlayout/>}>
      <Route index element ={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<ContactLayout/>}>    {/* nested route*/}
         <Route path="mail" element ={<Mail/>} />
         <Route path="phone" element ={<Phone/>} />
      </Route>
      <Route path="careers" element={<CareersLayout/>}>   {/* nested route*/}
          <Route index element={<Careers/>} loader ={careerLoader} errorElement={<CareerError/>} />     {/* loader prop */}
          <Route path =':id' element={<CareerDetails/>} loader={jobDetailsLoader} errorElement={CareerError} />     {/* dianamic route */}
          <Route path='apply/:id' element={<JobApplication />} />
      </Route>
      <Route path="*" element ={<PageNotFound/>} />
      </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
