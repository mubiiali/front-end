import React from 'react'
import './Partners.css'
import BiafoTech from '../../images/BiafoTech.png'
import neerpeer from '../../images/neeerpeer.jpeg'
import merk from '../../images/merk.jpeg'
import uol from '../../images/uol.jpeg'

function Partners() {
  return (
    <div className='Partners'>
        <div className='pantners-heading'>
        <h1>Our Partners</h1>
        </div>
        <div className='Companies'>
        <img src={BiafoTech} alt='img'></img>
        <img src={neerpeer} alt='img'></img>
        <img src={merk} alt='img'></img>
        <img src={uol} alt='img'></img>
   
        </div>
        <div className='elumni'>
            <h1>Who is elumni ?</h1>
            <p>Elumni is your ultimate career catalyst, specializing in advanced skill development, customized trainings, and technical mastery. Founded on the three core principles - Equip, Enhance, Enable - we empower individuals to transform their professional lives. With a unique blend of seasoned educators and industry leaders at the helm, we offer a dynamic learning environment that blends academic rigor with real-world application. Whether you're taking your first career steps, eyeing a promotion, or pivoting into a new field, Elumni is your lifelong partner in achieving and exceeding your career goals.</p>
        </div>
    </div>
  )
}

export default Partners