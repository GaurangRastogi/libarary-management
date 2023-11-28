import React, { useEffect, useState } from "react";
import './Book.css';
import { useSelector } from "react-redux";

const Book = ({ book}) => {

  const user = useSelector((state)=>state.user);
  const [notInCartOrRent,setNotInCartOrRent]=useState(true);

  const utility=async (e)=>{
    e.preventDefault();

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL+"/user/addToCart",
      {
        method:"POST",
        headers: {
            "Content-type":"application/json",
            Authorization: `Bearer ${user.token}`
        },
        body:JSON.stringify({
          email:user.email,
          bookId:book._id
        })
      }
    )

    const json = await response.json();
    inCartOrRent();
    return;
  }

  const inCartOrRent=async()=>{
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL+"/user/bookInCartOrRent",
      {
        method:"POST",
        headers: {
            "Content-type":"application/json",
            Authorization: `Bearer ${user.token}`
        },
        body:JSON.stringify({
          email:user.email,
          bookId:book._id
        })
      }
    )
    const json=await response.json();
    setNotInCartOrRent(json.message);
  }

  useEffect(()=>{
    if(user)
      inCartOrRent();
  },[])


  return (
      <div className="h-book">
        <div className="h-book-left">
          <img src={book.imageUrl} alt={`Book - ${book.name}`}/>
        </div>

        <div className="h-book-right">
          <h2 className="h-book-name">{book.name}</h2>
          <h4 className="h-book-author">Author - {book.author}</h4>
          <h4 className="h-book-category">Category - {book.category}</h4>

          <p className="h-book-desc">{book.description}</p>

          {user && notInCartOrRent && <button className="w-1/1 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:border-green-700" onClick={utility}>
            Add to Cart
          </button>}
        </div>
      </div>
  );
};

export default Book;
