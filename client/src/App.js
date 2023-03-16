// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookForm from './components/BookForm';
import Books from './components/Books';
import MyNav from './components/MyNav';
// import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/add' element={<BookForm/>}/>
        {/* <Route path='add' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
