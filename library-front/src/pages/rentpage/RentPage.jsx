import React, { useEffect,useState} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../component/SearchBar/SearchBar';
import BookRentPage from '../../component/BookRentPage/BookRentPage';

const RentPage = () => {

  const navigate=useNavigate();
  const user = useSelector((state) => state.user);


  const [books, setBooks] = useState();
  const [toggle,setToggle]=useState(0);

  const change=()=>{
    setToggle(!toggle);
  }

  const utility = async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/user/rented",
      {
        method:"POST",
        headers: {
            "Content-type":"application/json",
            Authorization: `Bearer ${user.token}`
        },
        body:JSON.stringify({email:user.email})

      }
    );
    const json = await response.json();
    setBooks(json.books);
  };


  useEffect(()=>{
    if(user===null)
      navigate('/');
    else
      utility();
  },[toggle]);


  return (
    <div className='r'>
        <Navbar/>
        
        <p className="c-heading">
          Navigating the Depths of Knowledge with our Advanced{" "}
          <span>eLibrary</span> System for Seamless Resource Organization and
          Retrieval.
        </p>

        <SearchBar />

        <div className="c-books">
          {!books ? ( <h1>No Books are Rented!</h1>) : 
          (
            books.map((book) => <BookRentPage book={book} toggle={change} key={book._id}/>)
          )}
        </div>
    </div>
  )
}

export default RentPage