import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

const AdminPage = () => {

    const navigate=useNavigate();
    const admin = useSelector((state) => state.admin);

    useEffect(()=>{
        if(admin===null)
          navigate('/');
    },[]);
    
    
    return (
        <div>
            <Navbar/>
            AdminPage
        </div>
    )
}

export default AdminPage