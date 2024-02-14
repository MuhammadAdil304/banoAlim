import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { IconButton, TextField } from '@mui/material';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import CloseIcon from '@mui/icons-material/Close';
import { FBAdd } from './config/firebaseMethod.js';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function App() {
  const [btnState, setBtnState] = useState(false)
  const [fillFields, setFillFields] = useState<any>({})
  const [classState, setClassState] = useState(false)
  const [readMoreOfDarsenizami, setReadMoreOfDarseNizami] = useState(false)
  const [readMoreOfQuraniArabi, setReadMoreOfQuraniArabi] = useState(false)


  const fillAdmissionForm = (key: any, val: any) => {
    fillFields[key] = val
    setFillFields({ ...fillFields })
    if (fillFields.course == 'Dars-e-Nizami') {
      setClassState(true)
    }
    else {
      setClassState(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const AdmissionFunc = () => {
    if (Object.values(fillFields).length < 7) {
      toast.error('Please Filled Out This Fields', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
    else if (fillFields.course == 'Dars-e-Nizami' && Object.values(fillFields).length < 8) {
      toast.error('Please Filled Out This Fields', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
    else {
      FBAdd('/Students', fillFields)
        .then((res) => {
          console.log(res)
          window.open('https://wa.me/+923233327576', '_blank')
        })
        .catch((err) => {
          console.log(err.message)
        })
    }

  }

  return (
    <div className="App">
      <ToastContainer />
      {/* Navbar */}
      <header className='navbar_header'>
        <div className='d-flex justify-content-around fixed-top navbar_container'>
          <div className='mt-3'>
            <img className='rounded' src={require('./images/banoAlim_Logo.png')} alt="" />
          </div>
          <div className='navbar_navigation'>
            <ul className='d-flex justify-content-center navbar_list mt-2 '>
              <li className='pt-4 px-4'><a href="#home">Home</a></li>
              <li className='pt-4 px-4'><a href="#ourCourses">Our Courses</a></li>
              <li className='pt-4 px-4'><a href="#admissionForm">Register Now</a></li>
            </ul>
          </div>
          <div className='mt-4'>
            <IconButton onClick={() => setBtnState(!btnState)} className='navbar_menuBtn'>{btnState ? (<CloseIcon />) : (<ReorderSharpIcon />)}</IconButton>
          </div>
        </div>
        {btnState ? (
          <div className='menu_dropdown '>
            <ul>
              <li className='pt-4 px-4'><a href="#home">Home</a></li>
              <li className='pt-4 px-4'><a href="#ourCourses">Our Courses</a></li>
              <li className='pt-4 px-4'><a href="#admissionForm">Register Now</a></li>
            </ul>
          </div>
        ) : ('')}
      </header>
      {/* Our Courses */}
      <section id='ourCourses' className='courses'>
        <div className="container ">
          <div>
            <div className='text-center  '>
              <h1 className='heading_font'>Our Courses</h1>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4 col-sm-6">
                <div className="card my-3" >
                  <img src={require("./images/darsenizami.jpeg")} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dars-E-Nizami</h5>
                    <p className='text-start'>
                      {readMoreOfDarsenizami ? (<>
                        inshaAllah. Its inception took place after Taraweeh prayers during Ramadan...where children were taught the translation of 10 verses of the Quran, igniting their interest. Subsequently,
                        the first class began, and with Allah's blessings, it has been running smoothly for four years now.
                        This institute follows the Darse Nizami curriculum affiliated with Wifaq-ul-Madaris, and upon completion of the
                        eight-year course, students receive the Alim degree accredited by Wifaq-ul-Madaris. Without further delay, you can click the button below to apply for admission.
                        <p className=' text-primary text-end' style={{ cursor: 'pointer' }} onClick={() => setReadMoreOfDarseNizami(!readMoreOfDarsenizami)}>Hide</p></>) : (
                        <>
                          The Al-Aziz Islamic Institute has been operating for four years by the grace of Allah, and by His grace, the fifth year will also ...
                          <p className=' text-primary text-end' style={{ cursor: 'pointer' }} onClick={() => setReadMoreOfDarseNizami(!readMoreOfDarsenizami)}>Read More</p>
                        </>
                      )}</p>
                    <a href="#admissionForm" className="btn btn-primary">Register Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card my-3 " >
                  <img src={require('./images/Quranic Arabic.png')} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Qurani Arabi</h5>
                    <p className="text-start">
                      {readMoreOfQuraniArabi ? (
                        <>
                          The Al-Aziz Islamic Institute has recently launched a one-year Quranic Arabic course. In this course, you will be taught complete... Arabic, enabling you to understand Arabic texts and recognize nouns and verbs in Arabic.Without further delay, you can click the button below to apply for admission.
                          <p className=' text-primary text-end' style={{ cursor: 'pointer' }} onClick={() => setReadMoreOfQuraniArabi(!readMoreOfQuraniArabi)}>Hide</p>
                        </>
                      ) : (
                        <>
                          The Al-Aziz Islamic Institute has recently launched a one-year Quranic Arabic course. In this course, you will be taught complete...
                          <p className=' text-primary text-end' style={{ cursor: 'pointer' }} onClick={() => setReadMoreOfQuraniArabi(!readMoreOfQuraniArabi)}>Read More</p>
                        </>
                      )
                      }


                    </p>
                    <a href="#admissionForm" className="btn btn-primary">Register Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admission Form */}
      <section id="admissionForm" className='admissionForm'>
        <div>
          <div className='text-center'>
            <h3 className='heading_font my-5'>ADMISSION FORM</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-12">
                  <label className='px-2 py-1 text-secondary'>Your Name*</label>
                  <input type="name" onChange={(e: any) => fillAdmissionForm('name', e.target.value)}  placeholder='Name' className='input' />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label className='px-2 py-1 text-secondary'>Your Number*</label>
                  <input type="number" onChange={(e: any) => fillAdmissionForm('number', e.target.value)}  placeholder='Contact No' className='input' />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label className='px-2 py-1 text-secondary'>Your CNIC*</label>
                  <input type='number' onChange={(e: any) => fillAdmissionForm('cnic', e.target.value)}  placeholder='CNIC' className='input' />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label className='px-2 py-1 text-secondary'>Last Qualification*</label>
                  <input type="text" onChange={(e: any) => fillAdmissionForm('lastQualification', e.target.value)}  placeholder='Last Qualification' className='input' />
                </div>
                <div className="col-md-4 col-12">
                  <label className='px-2 py-1 text-secondary'>Where do you Job at Time*</label>
                  <input type="text" onChange={(e: any) => fillAdmissionForm('job', e.target.value)}  placeholder='Where do you Job at Time' className='input' />
                </div>
                <div className="col-md-4 col-12">
                  <label className='px-2 py-1 text-secondary'>Which course do you want to study?*</label>
                  <select id="" className='select' onChange={(e: any) => fillAdmissionForm('course', e.target.value)}>
                    <option value=""></option>
                    <option value="Dars-e-Nizami"  >Dars-e-Nizami , 8 years Course</option>
                    <option value="Qurani Arabi " >Qurani Arabi , 1 year Course</option>
                  </select>
                </div>
                {classState ? (
                  <div className="col-md-4 col-12">
                    <label className='px-2 py-1 text-secondary'>Which class do you want to study*</label>
                    <select id="" className='select text-end' onChange={(e: any) => fillAdmissionForm('class', e.target.value)}>
                      <option value=""></option>
                      <option value="اولی"  >اولی</option>
                      <option value="ثانیہ" >ثانیہ</option>
                      <option value="ثالثہ" >ثالثہ</option>
                      <option value="رابعہ" >رابعہ</option>
                      <option value="خامسہ" >خامسہ</option>
                      <option value="سادسہ" disabled>(Coming Soon)سادسہ</option>
                      <option value="سابعہ" disabled>(Coming Soon)سابعہ</option>
                      <option value="دوری حدیث" disabled>(Coming Soon)دوری حدیث</option>
                    </select>
                  </div>
                ) : ('')}
                <div className="col-md-8 col-12">
                  <label className='px-2 py-1 text-secondary'>Your Address*</label>
                  <input type="text" onChange={(e: any) => fillAdmissionForm('address', e.target.value)}  placeholder='Address' className='input' />
                </div>
              </div>
            </div>
            <div className='text-center my-3'>
              <button className='btn btn-primary my-3' type='submit' onClick={AdmissionFunc}>SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
      {/* footer */}
      <footer>
        <div className='footer py-5'>
          <div className="container">
            <div className="row">
              <div className="col-md-3 my-1">
                <img src={require('./images/banoAlim_footer.png')} alt="" width='100%' className='mt-5' />
              </div>
              <div className="col-md-3  my-3 ">
                <h3 className='heading_font '>Quick Links</h3>
                <p><a className='text-secondary ' href="#">Home</a></p>
                <p><a className='text-secondary ' href="#ourCourses">Our Courses</a></p>
                <p><a className='text-secondary ' href="#admissionForm">Admission Form</a></p>

              </div>
              <div className="col-md-6 my-3">
                <h3 className='heading_font '>Contact Info</h3>
                <p className='text-secondary'><IconButton ><MailOutlineIcon color='primary' className='ico'/></IconButton>saleemullahmemon88@gmail.com</p>
                <p className='text-secondary'><IconButton ><LocalPhoneSharpIcon color='primary' className='ico' /></IconButton>+92 323 3327576</p>
                <p className='text-secondary'><IconButton ><LocationOnSharpIcon color='primary' className='ico' /></IconButton>AL-AZIZ Islamic Institute 1027/3 Hussainabad FB area Karachi ,Pakistan.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='footer_end p-4 '>
          <hr className="text-white" />
          <h5 className="text-white text-center">AL-AZIZ Islamic Institute Copyright 2023 - All Rights Reserved</h5>
        </div>
      </footer>

    </div>


  );
}

export default App;
