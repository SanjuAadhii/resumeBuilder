import React from 'react'
import './../resources/layout.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/LOGO.png'
import Footer from "../components/footer/Footer"



function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('resume-user'))
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('resume-user');
    localStorage.removeItem('user-image')
    navigate('/login');
  };

  return (
    <div className='layout'>
      <div className='header'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img className='logo' height={30} src={logo}/></a>
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" to={"/home"}><span className='navBtn'><i class="fa-solid fa-house"></i> Home</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to={"/template"}><span className='navBtn'><i class="fa-solid fa-file-lines"></i> Template</span></Link>
                  </li>
                  <li class="nav-item dropdown" id='navBtn'>
                    <a class="nav-link dropdown-toggle" href="#"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                      <span> <i class="fa-solid fa-user"></i> {user.username} </span>
                    </a>
                    <ul class="dropdown-menu " id='dropDown' aria-labelledby="navbarDropdown">
                      <li><span class="nav-link active" id='profile23'><Link to={"/profile"} >Profile</Link></span></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><span class="nav-link active" onClick={handleLogout}>Logout</span></li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </nav>


      </div>

      <div className='content'>
        {props.children}
      </div>



      {/* <section className='foot'>
      <Footer/>
      </section> */}
    </div>

    
  );
}

export default DefaultLayout;
