import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

const AdminPage = () => {

    const navigate=useNavigate();
    const admin = useSelector((state) => state.admin);
    const token = admin.token;

    const [bookCreate,setBookCreate]=useState({
        name:"",
        category:"",
        author:"",
        imageUrl:"",
        description:"",
        numberOfBooks:0
    });

    const [bookUpdate,setBookUpdate]=useState({
        name:"",
        category:"",
        author:"",
        imageUrl:"",
        description:"",
        numberOfBooks:0
    });
    
    const [bookDelete,setBookDelete]=useState({name:""});


    const addBook=async(e)=>{
        e.preventDefault();

        const response=await fetch(
            process.env.REACT_APP_BACKEND_URL+"/admin/create",
            {
                method:"POST",
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify(bookCreate)
            }
        );

        const json=await response.json();
        setBookCreate({
            name:"",
            category:"",
            author:"",
            imageUrl:"",
            description:"",
            numberOfBooks:0
        });

        return;
    }

    const updateBook=async (e)=>{
        e.preventDefault();

        const response=await fetch(
            process.env.REACT_APP_BACKEND_URL+"/admin/update",
            {
                method:"POST",
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify(bookUpdate)
            }
        );

        const json=await response.json();
        setBookUpdate({
            name:"",
            category:"",
            author:"",
            imageUrl:"",
            description:"",
            numberOfBooks:0
        });

        return;
    }

    const deleteBook=async (e)=>{
        e.preventDefault();

        const response=await fetch(
            process.env.REACT_APP_BACKEND_URL+"/admin/delete",
            {
                method:"DELETE",
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify(bookDelete)
            }
        );

        const json=await response.json();
        setBookDelete({name:""});
        return;
    }

    useEffect(()=>{
        if(admin===null)
          navigate('/');
    },[]);
    
     
    return (
        <div>
            <Navbar/>
            
            <div className='flex justify-around'>
                <div className="create w-1/3 mx-auto my-10 p-4 border border-teal-500 rounded-2xl">

                    <h1 className="text-4xl text-center">Add New Book</h1>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-2xl">Name</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="name"
                        type="text"
                        value={bookCreate.name}
                        onChange={(e) => setBookCreate({ ...bookCreate, name: e.target.value })}
                        placeholder="Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category" className="text-2xl">Category</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="category"
                        type="text"
                        value={bookCreate.category}
                        onChange={(e) => setBookCreate({ ...bookCreate, category: e.target.value })}
                        placeholder="Category"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="author" className="text-2xl">Author</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="author"
                        type="text"
                        value={bookCreate.author}
                        onChange={(e) => setBookCreate({ ...bookCreate, author: e.target.value })}
                        placeholder="author"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="imageUrl" className="text-2xl">ImageUrl</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="imageUrl"
                        type="text"
                        value={bookCreate.imageUrl}
                        onChange={(e) => setBookCreate({ ...bookCreate, imageUrl: e.target.value })}
                        placeholder="imageUrl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-2xl">Description</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="description"
                        type="text"
                        value={bookCreate.description}
                        onChange={(e) => setBookCreate({ ...bookCreate, description: e.target.value })}
                        placeholder="description"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="quantity" className="text-2xl">Quantity</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="quantity"
                        type="number"
                        value={bookCreate.numberOfBooks}
                        onChange={(e) => setBookCreate({ ...bookCreate, numberOfBooks: e.target.value })}
                        placeholder="Quantity"
                        />
                    </div>

                    <button
                        onClick={addBook}
                        className="block w-1/3 p-3 mx-auto my-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:border-pink-700"
                    >
                        Add Book!
                    </button>
                </div>


                <div className="update w-1/3 mx-auto my-10 p-4 border border-teal-500 rounded-2xl">

                    <h1 className="text-4xl text-center">Update Book</h1>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-2xl">Name</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="name"
                        type="text"
                        value={bookUpdate.name}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, name: e.target.value })}
                        placeholder="Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category" className="text-2xl">Category</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="category"
                        type="text"
                        value={bookUpdate.category}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, category: e.target.value })}
                        placeholder="Category"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="author" className="text-2xl">Author</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="author"
                        type="text"
                        value={bookUpdate.author}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, author: e.target.value })}
                        placeholder="author"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="imageUrl" className="text-2xl">ImageUrl</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="imageUrl"
                        type="text"
                        value={bookUpdate.imageUrl}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, imageUrl: e.target.value })}
                        placeholder="imageUrl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-2xl">Description</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="description"
                        type="text"
                        value={bookUpdate.description}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, description: e.target.value })}
                        placeholder="description"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="quantity" className="text-2xl">Quantity</label>
                        <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="quantity"
                        type="number"
                        value={bookUpdate.numberOfBooks}
                        onChange={(e) => setBookUpdate({ ...bookUpdate, numberOfBooks: e.target.value })}
                        placeholder="Quantity"
                        />
                    </div>

                    <button
                        onClick={updateBook}
                        className="block w-1/3 p-3 mx-auto my-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:border-pink-700"
                    >
                        Update Book!
                    </button>
                </div>
            </div>


            <div className="create w-3/4 mx-auto my-2 p-4 border border-teal-500 rounded-2xl">

                <h1 className="text-4xl text-center">Delete Book</h1>
                <hr />
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-2xl">Name</label>
                    <input
                        className=" text-black text-xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="name"
                        type="text"
                        value={bookDelete.name}
                        onChange={(e) => setBookDelete({ ...bookDelete, name: e.target.value })}
                        placeholder="Name"
                    />
                </div>

                <button
                    onClick={deleteBook}
                    className="block w-1/3 p-3 mx-auto my-4 text-xl text-white bg-pink-600 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:border-pink-700"
                >
                    Delete Book!
                </button>
            </div>
        </div>
    )
}

export default AdminPage