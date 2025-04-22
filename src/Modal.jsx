import React from "react";

//import Modal from "react-modal";
import './App.css';



export default function Modal({isOpen, closeModal}){

// function to validate email

const validateEmail= (email) =>{
   alert(email);
    //var regex = /\S+@\S+\.\S+/;
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email); //return boolean
}

const validateContactNumber =(phonenumber) =>{
    return phonenumber.length === 10 && !isNaN(phonenumber) ;
    
}

const validateDOB =(dob) =>{

    const currentdate = new Date();
    const DOB = new Date(dob);
    return DOB < currentdate ; //check for dob is not in future date and return the boolean 
}



  const handleSubmit= (event) =>{
    event.preventDefault();

   const formData = new FormData(event.target); // initialise form data 

   //get form details from formdata 

   const email = formData.get('email');

   const dob = formData.get('dob');
   const phonenumber = formData.get('phone');

   if(!validateEmail(email)){
     alert('Invalid email. Please check your email address.');
     return;
   }
   
   if(!validateContactNumber(phonenumber)){

    alert('Invalid phone number. Please enter a 10-digit phone number.');
    
    return;
   }

   if(!validateDOB(dob)){   

    alert('Invalid date of birth. Date of birth cannot be in the future.');
    return;

   }
   closeModal(true);

  }


const handleCloseForm = (event) =>{

  closeModal(true);
}

  //jsx rendered

    return(    
    
        <div className='modal' onClick={handleCloseForm}>

            <div className='modal-content'  >
                            <h2>Fill details</h2>
                            
                            <form onSubmit={handleSubmit}>
                                <label><h3>Username:</h3></label>
                                <input className='inputtext' id='username' required  ></input>
                                <label><h3>Email Address:</h3> </label>
                                <input  className='inputtext' id='email' type='email' name='email' required></input>
                                <label><h3>Phone number:</h3></label>
                                <input  className='inputtext' id='phone' type='te1' name='phone' required ></input>
                                <label><h3>Date of Birth:</h3></label>

                                <input  className='inputtext' id='dob' type="date"  required></input><br/><br/>

                                <button className="submit-button" type="submit" >submit</button>
                            </form>
                           
            </div>
        </div>
       
    
    
       
   )
}