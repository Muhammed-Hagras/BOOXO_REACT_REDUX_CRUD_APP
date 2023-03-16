import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../store/reducer/bookSlice';

export default function BookForm() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [formValues, setFormValues] = useState({
        title: "",
        price: "",
        desc: "",
    })

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addBooks(formValues)).then(() =>{
            history("/");
        })
    }

    // useEffect(()=> {
    //     console.log(formValues)
    // }, [formValues])

    const changeHandler = (e) => {
        // console.log(e.target.name);
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div className='bg-light'>
        <div className='container mt-5'>
            <form action='' className='p-5' onSubmit={submitHandler} onChange={changeHandler}>
                <input type="text" className='form-control mb-2' 
                placeholder='Enter Book Title'
                name='title'
                ></input>
                <input type="text" className='form-control mb-2' 
                placeholder='Enter Book Price'
                name='price'
                ></input>
                <textarea 
                name='desc'
                className='form-control' 
                placeholder='Enter book description'></textarea>
                <button type='submit' className='btn btn-outline-primary mt-5'>Add New Book</button>
            </form>
        </div>
    </div>
  )
}
