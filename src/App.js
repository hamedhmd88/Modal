import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handelOpen = () =>{
    setShowModal(true);
  }
   
  const handelClose = () =>{
    setShowModal(false);
  }
  return (
    <>
    <button className='cursor-pointer py-4 px-8 block  mx-auto bg-indigo-500 text-white text-xl rounded-full transition duration-500 hover:bg-sky-800	 mt-60' onClick={handelOpen}>Click Me</button>
      

    { showModal &&

    <Modal addClose={handelClose}/>
    
    
    }

      
    
    </>
  );
}

export default App;
