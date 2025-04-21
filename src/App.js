
import { React, useState } from 'react';
import './App.css';

import UserModal from './Modal';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openUserModel =() =>{
    setIsModalOpen(true);
  }

  const closeUserModal =() =>{
    setIsModalOpen(false);
  }

  return (
    <div className="App">

    <h1> User Details Modal</h1>
    
    <button className='open-button' onClick={openUserModel}>Open Form</button>         
        {isModalOpen && (<UserModal isOpen={isModalOpen} closeModal={closeUserModal} /> ) }


    </div>
  );
}

export default App;
