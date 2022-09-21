import React from 'react'
import { Link } from 'react-router-dom'
import LoggedOutNavbar from './navbar'


export const ErrorPage = () => {
  return (
    <>
    <LoggedOutNavbar/>
        <div  class="jumbotron d-flex align-items-center min-vh-100">
        <div  class="container text-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/"> Go Home</Link>
        </div>
  
        
    </div>
    </>
    
  )
}
