import React from 'react'
import './Navbar.css';
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
  
  const navigate=useNavigate();
  return (
    <div className='n'>
        <div className="n-left">
            <h1 className='n-logo'>eLibrary</h1>
            <h1 className='n-links' onClick={()=>navigate('/')}>Home</h1>
            <h1 className='n-links' onClick={()=>navigate('/cart')}>Cart</h1>
            <h1 className='n-links' onClick={()=>navigate('/rented')}>Rented</h1>
        </div>
        <div className="n-right">
            <h1 className='n-links' onClick={()=>navigate('/profile')}>Profile</h1>
            <button className='n-button' onClick={()=>navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Navbar