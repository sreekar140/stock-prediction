import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
        <div className='d-flex gap-2'>
            <Button text = "Login" className="btn-outline-info" url="/login"/>
            <Button text = "Register" className="btn-info" url="/register"/>
        </div>
    </nav>
  )
}

export default Header