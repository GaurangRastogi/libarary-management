import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./HomePage.css";
import SearchBar from "../../component/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import Book from "../../component/Book/Book";
const HomePage = () => {
  const user = useSelector((state) => state.user);

  const [books, setBooks] = useState();

  const utility = async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/common/display"
    );
    const json = await response.json();
    setBooks(json.books);
  };

  useEffect(() => {
    utility();
  }, []);

  return (
    <div className="h">
      <Navbar />

      <p className="h-heading">
        Navigating the Depths of Knowledge with our Advanced{" "}
        <span>eLibrary</span> System for Seamless Resource Organization and
        Retrieval.
      </p>

      <SearchBar />

      <div className="h-books">
        {!books ? ( <h1>No Books in Library!</h1>) : 
        (
          books.map((book) => <Book book={book} />)
        )}
      </div>
    </div>
  );
};

export default HomePage;
