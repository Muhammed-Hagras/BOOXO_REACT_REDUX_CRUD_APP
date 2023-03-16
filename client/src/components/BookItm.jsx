import React from 'react'
import { useDispatch,   } from 'react-redux';
import { deleteBooks } from '../store/reducer/bookSlice';

export default function BookItm({books, handleGetBook}) {
 
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
      await dispatch(deleteBooks({ id}));
    
  };

  // const handleGetBook = async (id)=> {
  //   console.log(id)
  //   await dispatch(getOneBook({id}))
  // }

  // console.log(handleGetBook())

  // const bookList = 
  // books.length === 0? (
  //   <p className='lead fs-3'>No Books To Show</p>
  // ) : (
    // console.log(books)
  
//  books.length === 0? (<p className='lead fs-3'>No Books To Show</p>
//   ) :( 
  return(
    books.map((book) => {
  return(
    <div  className="bg-light text-dark p-2 mb-4" key={book.id}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>{book.title}</h2>
            </div>
            <div className="col-md-7">
              <button className="btn btn-success mx-3 card-link" onClick={() => handleGetBook(book.id)}>View Book</button>
              <button className="btn btn-danger mx-3"  onClick={() => handleDelete(book.id)}>Delete Book</button>
            </div>
          </div>
        </div>
      </div>)
  }
  // ))}
    
    )
    )
    // )

}





