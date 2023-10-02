import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RentPage = () => {

  const navigate=useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(()=>{
    if(user===null)
      navigate('/');
  },[]);


  return (
    <div className='r'>
        <Navbar/>
        RentPage
    </div>
  )
}

export default RentPage