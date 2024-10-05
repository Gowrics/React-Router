import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const AppBreadcrumbs = () => {
    const location = useLocation()   // to fetch path details
    //console.log(location)
    ////contact/mail
    let crumbLink =''
    const crumbPath= location.pathname.split('/')
                            .filter((path) => path !== '')
                            .map((crumb) => {
                                crumbLink += `/${crumb}`
                                return <Link to ={crumbLink} key = {crumb}>
                                    {crumb}
                                </Link>

                            })
    console.log(crumbPath)
  return (
    <>
   <h2>{ crumbPath} </h2>
    </>
  )
}

export default AppBreadcrumbs