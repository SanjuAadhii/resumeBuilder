import React from 'react'
import '../../resources/templatecss/template4.css'
const Template4 = () => {
    const user = JSON.parse(localStorage.getItem('resume-user'))
    const imageData = localStorage.getItem('user-image');
    return (
<div className="container1">
    <div className="profile">
      <div className="profile_container1">
        <div className="profile_profileImg1">
        <img src={imageData} alt="" id='img4'/>
        </div>
        <div>
          <h1 className="profile_name">
            <span className="profile_name_firstName">{user.Firstname}</span>
            <span className="profile_name_lastName">{user.Lastname}</span>
          </h1>
          <p className="profile_title">{user.Portfolio}</p>
          <p className="description profile_description">
            {user.Objective}
          </p>
        </div>
      </div>
    </div>
    <div className="group-1">
      <div className="skills">
        <h3 className="title" style={{marginTop:"10px"}}>Expertise</h3>
        <ul className="skills_list description">
          {user.skills.map((skill) => {
                    return <div  style={{breakInside: "avoid"}}><li>
                    {skill.Technology}
                  </li></div>
                })}
        </ul>
      </div>
     

      <div className="edu">
        <h3 className="title" style={{marginTop:"10px"}}>Education</h3>
        {user.education.map((edu) => {
                    return  <div className="edu_item" style={{breakInside: "avoid"}}>
                    
                    <h4 className="item_title">{edu.Qualification} <p className="item_preTitle">{edu.YearRange}</p></h4>
                    <p className="item_subtitle">
                    {edu.Institution}
                    </p>
                  </div>
                    
                })}
        
      </div>

      <div className="certification" >
        <h3 className="title" style={{marginTop:"10px"}}>certification</h3>
        <div className="certification_item">
          <p className="item_preTitle">2018</p>
          <h4 className="item_title">Frontend Developer</h4>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>
      </div>
    </div>
    <div className="group-2">
      <div className="exp">
        <h3 className="title" style={{marginTop:"10px"}} >Experience</h3>
        {user.Experience.map((exp) => {
                    return <div className="exp_item" >
                    <p className="item_preTitle">{exp.YearRange}</p>
                    <h4 className="item_title">{exp.Company}</h4>
                    <p className="item_subtitle">{exp.jobRole}</p>
                    <p className="description">
                       {exp.Rolework}
                    </p>
                  </div>
                })}
        
      </div>
      <div className="awards">
        <h3 className="title">PROJECTS</h3>
        {user.Projects.map((pro) => {
                    return <div className="awards_item" style={{breakInside: "avoid"}}>
                    <p className="item_preTitle">{pro.YearRange}</p>
                    <h4 className="item_title">{pro.Title}</h4>
                    <p className=" description">
                    {pro.Description}
                    </p>
                  </div>
                })}
      </div>

      <div className="interest">
        <h3 className="title" style={{marginTop:"10px"}}>Interest</h3>
        
        <div className="interest_items">
          <div className="interest_item">
          {user.Interest.map((Interest) => {
                    return   <span style={{color: "white"}}>{Interest.Interest}</span>
                    
                })}
            
          </div>
          
        </div>

      </div>
    </div>
    <hr/>
    <div className="group-3">
      <div className="contact">
        <h3 className="title" style={{marginTop:"10px"}}>Contact</h3>
        <div className="contact_info">
          <p className="description">
            {user.Address} , {user.city} , {user.state} , {user.country}

          </p>
          <p className="description">
            {user.Mobilenumber}
          </p>
          <p className="description">
            {user.Email}
          </p>
        </div>
      </div>
      <footer>
      <div className="social" >
        <h3 className="title" style={{marginTop:"10px"}}>Socials</h3>
        <div className="social_items">
          <a href="#" target="_b" className="social_item" >
            <i data-feather="github"></i>
            <span className='link'>/shaifarfan</span>
          </a>
          <a href="#" target="_blank" className="social_item">
            <i data-feather="twitter"></i>
            <span className='link'>/shaifarfan08</span>
          </a>
          <a href="#" target="_blank" className="social_item">
            <i data-feather="linkedin"></i>
            <span className='link'>{user.LinkedIn}</span>
          </a>
        </div>
      </div>
      </footer>
    </div>
    
  </div>
 )
}

export default Template4;