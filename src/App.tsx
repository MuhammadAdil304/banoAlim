import React, { useState } from 'react';
import './App.css';
import Logo from './images/banoAlim_Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import MAButton from './components/MAButton.tsx';
import { IconButton, TextField } from '@mui/material';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [btnState, setBtnState] = useState(false)
  return (
    <div className="App">
      <header className='navbar_header'>
        <div className='d-flex justify-content-evenly fixed-top navbar_container'>
          <div className='mt-3'>
            <img className='rounded' src={Logo} alt="" />
          </div>
          <div className='navbar_navigation'>
            <ul className='d-flex justify-content-center navbar_list mt-2 '>
              <li className='pt-4 px-4'><a href="#home">Home</a></li>
              <li className='pt-4 px-4 '><a href="#aboutUs">About Us</a></li>
              <li className='pt-4 px-4'><a href="#ourCourses">Our Courses</a></li>
            </ul>
          </div>
          <div className='mt-4'>
            <a href="#admissionForm"> <button className='button navbar_btn' >Admission Now</button></a>
            {btnState ? (<IconButton onClick={() => setBtnState(!btnState)} className='navbar_menuBtn'><CloseIcon /></IconButton>) : (<IconButton onClick={() => setBtnState(!btnState)} className='navbar_menuBtn'><ReorderSharpIcon /></IconButton>)}
          </div>
        </div>
        {btnState ? (
          <div className='menu_dropdown '>
            <ul>
              <li className='pt-4 px-4'><a href="#home">Home</a></li>
              <li className='pt-4 px-4 '><a href="#aboutUs">About Us</a></li>
              <li className='pt-4 px-4'><a href="#ourCourses">Our Courses</a></li>
              <button className='button my-3' >Admission Now</button>
            </ul>
          </div>
        ) : ('')}
      </header>
      <section id="admissionForm">

        <div className='text-center'>
          <h1 className='heading_font'>ADMISSION FORM</h1>
        </div>
        <form action="">
          <div className='container'>
            <div className="row">
            <div className="col-md-4 col-12">
                <input type="name" placeholder='Name' className='input' />
              </div> <div className="col-md-4 col-12">
                <input placeholder='CNIC(xxxxx-xxxxxxx-x)' maxLength={15} className='input' />
              </div> <div className="col-md-4 col-12">
                <input type="name" placeholder='Name' className='input' />
              </div> <div className="col-md-4 col-12">
                <input type="name" placeholder='Name' className='input' />
              </div> <div className="col-md-4 col-12">
                <input type="name" placeholder='Name' className='input' />
              </div> <div className="col-md-4 col-12">
                <input type="name" placeholder='Name' className='input' />
              </div>   
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
