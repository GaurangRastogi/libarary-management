import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/index";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const admin=useSelector((state)=>state.admin);


  const utilityLogout=()=>{
    dispatch(setLogout());
    navigate('/');
  }
  return (
    <div className="n">
      <div className="n-left">
        <h1 className="n-logo">eLibrary</h1>
        <h1 className="n-links" onClick={() => navigate("/")}>
          Home
        </h1>

        {admin &&<h1 className="n-links" onClick={() => navigate("/admin")}>
          Admin
        </h1>}

        {user &&<h1 className="n-links" onClick={() => navigate("/cart")}>
          Cart
        </h1>
        }
        {user && <h1 className="n-links" onClick={() => navigate("/rented")}>
          Rented
        </h1>
        }
      </div>

      <div className="n-right">
        {user &&
        <h1 className="n-links" onClick={() => navigate("/profile")}>
          Profile
        </h1>
        }

        {user||admin?
        <button className="n-button" onClick={() => utilityLogout()}>
          Logout
        </button>
        :
        <button className="n-button" onClick={() => navigate("/login")}>
          Login
        </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
