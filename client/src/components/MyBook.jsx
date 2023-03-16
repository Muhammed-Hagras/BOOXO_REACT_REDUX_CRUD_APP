import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'

export default function MyBook() {

    // let [book, setBook] = useState()
    // const {books} = useSelector((state)=> state.booksReducer); 

    const navigate = useNavigate();
    const goToHome = () => {
      navigate("/")
    }
    
  return (
    <div className="container d-flex alignitems-center justifiy-content-center p-5 m-5">
    <div className="card" style={{width: "18rem"}}>
      <img src="https://img.btolat.com/news/large/259741.jpg" className="card-img-top" alt="..."/>
      <div className="card-body" >
        <h5 className="card-title">io</h5>
        <p className="card-text">
          {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
        iu
        </p>
        <NavLink href="#" className="btn btn-info" onClick={goToHome}>Go To Home</NavLink>
      </div>
    </div>
  
  </div>
  )
}
