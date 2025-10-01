import React from 'react'
// import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <div className='not-found-content'>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <p>Return to the <Link to="/">Homepage</Link></p>
      </div>
    </div>
  )
};

export default NotFound;
