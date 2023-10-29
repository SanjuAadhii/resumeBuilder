import React from 'react';
import '../../resources/templatecss/templatenew.css';

function Templatenew() {
  const user = JSON.parse(localStorage.getItem('resume-user'))
  return (

      <div className="resume__8">
        <div className="resume_left">
          <div className="resume_profile" style={{marginTop:"50px"}}>
          <img src={`http://localhost:5000/uploads/${user.photo}`} alt="profile_pic"/>
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">{user.Firstname} {user.Lastname}</p>
                <p className="regular">{user.Portfolio}</p>
              </div>
              <div className="contact__info1"  style={{ marginTop: "50px" }}>
                            <h3 className="bold">Contact Info</h3>
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    {user.Mobilenumber}
                                </li>
                                <li>
                                    <i className="fa fa-fax"></i>
                                    {user.Email}
                                </li>
                                <li>
                                    <i className="fa fa-globe"></i>
                                    {user.LinkedIn}
                                </li>

                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    {user.Address}
                                </li>
                            </ul>
                        </div>
            </div>
            <div className="resume_item resume_skills"  style={{marginTop:"50px", marginBottom:"50px"}}>
              <div className="title">
                <p className="bold">Skills</p>
              </div>
              <ul>
              {user.skills.map((skill) => {
                                    return <li style={{breakInside: "avoid"}}>
                                    <div className="skill_name">
                                    {skill.Technology}
                                    </div>
                                    <div className="skill_per">{skill.Rating}</div>
                                  </li>
                                })}
                
              </ul>
            </div>
            <div className="resume_item resume_social" style={{breakInside:'avoid'}}>
              <div className="title">
                <p className="bold">Certification</p>
              </div>
              <ul>
                 {
                user.Certification.map((cer) => {
                  return (
                    <div style={{breakInside:'avoid'}}>
                      <p className="certification__2">{cer.YearRange}</p>
                      <h4 className="title__2" >{cer.TitleofCertification}</h4>
                      <p className="para__2">
                        {cer.Description}
                      </p>
                    </div>
                  )
                })
              }
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right" >
          <div className="resume_item resume_about">
            <div className="title" style={{marginTop:"70px"}}>
              <p className="bold">About me</p>
            </div>
            <p>{user.Objective}</p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
            {user.Experience.slice(0, 3).map((exp) => {
                                return (
                                  <li  style={{breakInside:'avoid'}}>
                                  <div className="date"> {exp.YearRange}</div>
                                  <div className="info">
                                    <p className="semi-bold">{exp.Company} : <span className='bold__1'>{exp.jobRole} </span></p>
                                    <p> {exp.Rolework}</p>
                                  </div>
                                </li>
                                );
                            })}
            </ul>
          </div>
          <div className="resume_item resume_education" style={{breakInside:'avoid'}}>
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
            {user.education.slice(0, 3).map((edu) => {
                                return  <li>
                                <div className="date">{edu.YearRange}</div>
                                <div className="info">
                                  <p className="semi-bold">{edu.Institution} -- <span className='bold__1'>{edu.Qualification} Percentage : {edu.Percentage}</span></p>
                                  <p>{edu.EduDes}</p>
                                </div>
                              </li>
                            })}
             
             
            </ul>
          </div>
          <div className="resume_item resume_hobby1">
            <div className="title">
              <p className="bold">Hobby</p>
            </div>
            <ul>
              
              {user.Interest.map((Interest) => {
                    return   <li style={{color: "rgba(79, 146, 79, 0.993)",marginLeft:"30px"}}>{Interest.Interest}</li>
                    
                })}
            </ul>
          </div>
        </div>
      </div>
  
  );
}

export default Templatenew;
