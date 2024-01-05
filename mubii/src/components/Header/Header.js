import React from "react";
import img from "../images/logo.png"
import './Header.css'
import user from '../images/images.png' 
import { useState } from "react";
import LoginModal from "../Modal/Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="Header_Container">

     <img src={img} alt="img" />   
    <button className="login" type="button" onClick={openModal} ><img src={user} alt="asds"/>
    login/register {isModalOpen && <LoginModal closeModal={closeModal} />}</button>
    
    <button  type="button"><a style={{textDecoration:"none"}} href="#">Home</a></button>
    <div class="dropdown">
  <button class="dropbtn">Program</button>
  <div class="dropdown-content">
    <a style={{height:'50px',width:'7rem'}} href="#">Full stack Web Development</a>
  </div>
</div>
 <div class="dropdown">
  <button class="dropbtn">Courses</button>
  <div class="dropdown-content">
    <a href="#">Course A</a>
    <a href="#">Course B</a>
    <a href="#">Course C</a>
  </div>
</div>

  
   


        </div>


        

    
  );
}

export default Header