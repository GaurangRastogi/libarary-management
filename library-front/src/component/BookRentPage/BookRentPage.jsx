import React from "react";
import "./BookRentPage.css";
import { useSelector } from "react-redux";

const BookRentPage = ({ book,toggle}) => {

  const user=useSelector((state)=>state.user);

  const removeUtility=async()=>{
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL+"/user/removeBookFromRent",
      {
        method:"POST",
        headers:{
          "Content-type":"application/json",
          Authorization: `Bearer ${user.token}`
        },
        body:JSON.stringify({
          email:user.email,
          bookId:book._id
        })
      }
    );

    const json=await response.json();
    toggle();
  }
  
  return (
    <div className="h-book">
      <div className="h-book-left">
        <img src={book.imageUrl} alt={`Book - ${book.name}`} />
      </div>

      <div className="h-book-right">
        <h2 className="h-book-name">{book.name}</h2>
        <h4 className="h-book-author">Author - {book.author}</h4>
        <h4 className="h-book-category">Category - {book.category}</h4>

        <p className="h-book-desc">{book.description}</p>

        <button className="w-1/1 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:border-green-700" onClick={removeUtility}>
          Remove From Rent!
        </button>
      </div>
    </div>
  );
};

export default BookRentPage;
