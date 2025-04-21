// import React from "react";
// import style from "./UserModal.module.css";
// import Modal from "react-modal";


// export default function UserModal({isOpen, closeModal}){

//   const handleSubmit= () =>{

//    closeModal();

//   }

//     return(
//     <Modal isOpen={isOpen} onRequestClose={closeModal}  className={style.Modal}> 
    
          
//     <div className={style.wrapper}  >
//     <h1>Fill details</h1>
//             <h2>Username:</h2>
//             <input className={style.inputtext} required ></input>
//             <h3>Email Address:</h3>
//             <input  className={style.inputtext} required></input>
//             <h3>Phone number:</h3>
//             <input  className={style.inputtext} required ></input>
//             <h3>Date of Birth:</h3>
//             <input  className={style.inputtext} type="date" ></input><br/><br/>

//             <button className="formbutton" type="submit" onClick={handleSubmit} >submit</button>
//     </div>
//      </Modal>
    
       
//    )
// }