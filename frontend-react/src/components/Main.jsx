import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>A Stock Prediction Portal is a web-based platform that leverages data analysis and machine learning techniques to forecast stock market trends. It allows users to explore historical stock data, visualize price movements, and receive predictions based on various algorithms and models.By integrating real-time data and intelligent insights, the portal helps investors make informed decisions, minimize risks, and identify potential investment opportunities. Such a system combines the power of financial analytics with modern web technologies to deliver an interactive and user-friendly experience.</p>
            <Button text = "Login" className="btn-outline-danger"/>
        </div>
    </div>
    </>
  )
}

export default Main