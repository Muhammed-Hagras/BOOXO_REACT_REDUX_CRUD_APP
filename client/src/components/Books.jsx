import React, { useEffect, useState } from 'react'
import { getBooks } from '../store/reducer/bookSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import BookItm from './BookItm';
import BookDetails from './BookDetails';

export default function Books() {
  
  const {books, isLoading, error} = useSelector((state)=> state.booksReducer); 
  const dispatch = useDispatch();

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(()=> {
    dispatch(getBooks())
  }, [dispatch])

  const handleGetBook = (id)=> {
    const selectedBook = books.find((item) =>item.id === id);
    setSelectedBook((prev) => {
      return {...prev, ...selectedBook}
    })
  }

  // const bookList = 
  // books.length === 0? (
  //   <p className='lead fs-3'>No Books To Show</p>
  // ) : (
  // books.map((book)=> {
  //   return <BookItm key={book.id} book={book}/>;
  // })
  // );
  return (
    <div className='bg-secondary p-5 text-light mb-5'>
        <h2 className='mb-5'>Our Books</h2>
        {isLoading && <Loading/>}
        {!error&& <BookItm books={books} handleGetBook={handleGetBook}/>}
        {error && (
          <div className='alert alert-danger'>{error} Please Ty Again ...</div>
        )}
        <BookDetails 
        info={selectedBook}
        ></BookDetails>
    </div>

    
  )
}
