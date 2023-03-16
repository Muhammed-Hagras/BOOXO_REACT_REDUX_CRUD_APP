import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getOneBook } from '../store/reducer/bookSlice';

export default function BookDetails({info}) {
  return (
    <div className='bg-dark p-5 text-light rounded'>
        {!info?( <p className='lead fs-3'>No Available Books</p> ):(
    <div className="container d-flex alignitems-center justifiy-content-center p-5 m-5">
    <div className="card" style={{width: "70rem"}}>
      {/* <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8584/688584-h" className="card-img-top" alt="..."/> */}
      <div className="card-body text-dark" >
        <h5 className="card-title"> Title: {info.title}</h5>
        <p className="card-text">
        Price: {info.price}
        
        </p>
        Desc: {info.desc}
      </div>
    </div>
  
  </div>)}
    </div>
  )
}
