import React,{useEffect} from 'react'
import './CartPage.css';
import Navbar from '../../component/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartPage = () => {

  const navigate=useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(()=>{
    if(user===null)
      navigate('/');
  },[]);

  return (
    <div className='c'>
        <Navbar/>
        CartPage
    </div>
  )
}

export default CartPage