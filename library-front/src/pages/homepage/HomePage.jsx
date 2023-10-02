import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./HomePage.css";
import SearchBar from "../../component/SearchBar/SearchBar";

const HomePage = () => {
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

        <div className="h-book">

          <div className="h-book-left">
            <img src={"https://m.media-amazon.com/images/I/81Whkax7IGL._AC_UF1000,1000_QL80_.jpg"} alt={"Book"}/>
          </div>

          <div className="h-book-right">
            <h2 className="h-book-name">Harry Potter</h2>
            <h4 className="h-book-author">Author - J. K. Rowling</h4>
            <h4 className="h-book-category">Category - Fantasy Literature</h4>

            <p className="h-book-desc">
              The novels chronicle the lives of a young wizard, Harry Potter,
              and his friends Hermione Granger and Ron Weasley, all of whom are
              students at Hogwarts School of Witchcraft and Wizardry.
            </p>

            <button className="w-1/1 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focur:border-green-700">Add to Cart</button>
          </div>

        </div>


        <div className="h-book">

          <div className="h-book-left">
            <img src={"https://m.media-amazon.com/images/I/81Whkax7IGL._AC_UF1000,1000_QL80_.jpg"} alt={"Book"}/>
          </div>

          <div className="h-book-right">
            <h2 className="h-book-name">Harry Potter</h2>
            <h4 className="h-book-author">Author - J. K. Rowling</h4>
            <h4 className="h-book-category">Category - Fantasy Literature</h4>

            <p className="h-book-desc">
              The novels chronicle the lives of a young wizard, Harry Potter,
              and his friends Hermione Granger and Ron Weasley, all of whom are
              students at Hogwarts School of Witchcraft and Wizardry.
            </p>

            <button className="w-1/1 p-3 m-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focur:border-green-700">Add to Cart</button>
          </div>

        </div>

  

      </div>
    </div>
  );
};

export default HomePage;
