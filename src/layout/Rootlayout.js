import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppBreadcrumbs from '../components/AppBreadcrumbs'
 const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <AppBreadcrumbs/>
    <Outlet/>
    </> 
  )
}

export default Rootlayout;