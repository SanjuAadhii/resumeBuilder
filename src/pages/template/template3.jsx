import React from 'react'
import '../../resources/templatecss/template3.css'
const Template3 = () => {
  const user = JSON.parse(localStorage.getItem('resume-user'))
  const imageData = localStorage.getItem('user-image');
  return (

    <div classNameName='template3'>
      <div className="container11">
        <div className="profile11">
          <div className="profile_container11">
            <div className="profile_profileImg">
          <img src={imageData} alt="" />
        </div>
            <div>
              <h1 className="profile_name11">
                <span className="profile_name_firstName11">{user.Firstname} {user.Lastname} </span>
              </h1>
              <p className="profile_title11" style={{color:'gray'}}>{user.Role}</p>
              <p className="description profile_description11">
                {user.Objective}
              </p>
            </div>
          </div>
        </div>
        <div className="group-111">
          <div className="skills11">
            <h3 className="title11">Expert in</h3>
            <ul className="skills_list description11">
              {
                user.skills.map((skill) => {
                  return <li style={{ color: 'white', right:40, position:'relative' }}>{skill.Technology} with {skill.Rating} Rating </li>
                })
              }
            </ul>
          </div>

          <div className="edu11">
            <h3 className="title11">Education</h3>
            <div className="edu_item11" >
              {user.education.map((edu) => {
                return (
                  <div style={{ display: 'inline' }}>
                    <p className='item_preTitle11'>{edu.Qualification} at {edu.Institution} in the year {edu.YearRange}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="certification11">
            <h3 className="title11">certification</h3>
            <div className="certification_item11">
              {
                user.Certification.map((cer) => {
                  return (
                    <div>
                      <p className="item_preTitle11">{cer.YearRange}</p>
                      <h4 className="item_title11">{cer.Title}</h4>
                      <p className="description11">
                        {cer.Description}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="group-211">
          <div className="exp11">
            <h3 className="title11" style={{marginTop:"10px"}}>Experience</h3>
            <div className="exp_item11">
              {
                user.Experience.map((exp) => {
                  return <div>
                    <p className="item_preTitle11">{exp.YearRange}</p>
                    <h4 className="item_title11">{exp.Company} in {exp.Place}</h4>
                    <p className="item_subtitle11">{exp.jobRole}</p>
                    <p className=" description11">
                      {exp.Rolework}
                    </p>
                  </div>
                })
              }
            </div>
          </div>
          <div className="awards11">
            <h3 className="title11" style={{marginTop:"10px"}}>Projects</h3>
            <div className="awards_item11">
              {
                user.Projects.map((pro) => {
                  return <div>
                    <p className="item_preTitle11">{pro.YearRange}</p>
                    <h4 className="item_title11">{pro.Title}.</h4>
                    <p className=" description11">
                      {pro.Description}
                    </p>
                  </div>
                })
              }
            </div>
          </div>

          <div className="interest11">
            <h3 className="title11" style={{marginTop:"10px"}}>Interest</h3>
            <div className="interest_items11">
              {
                user.Interest.map((int)=>{
                  return(
                    <div style={{color:'white', fontSize:17}}>
                      {int.Interest}
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
        <hr />
        <div className="group-311">
          <div className="contact11">
            <h3 className="title11" style={{marginTop:"10px"}}>Contact</h3>
            <div className="contact_info11">
              <p className="description11">
                {user.Address}<br />
                {user.city}<br />
                {user.state}<br />
                {user.country}<br />
              </p>
            </div>

          </div>
          <div className="social11">
            <h3 className="title11" style={{marginTop:"10px"}}>Socials</h3>
            <div className="social_items11">
              <a href="#" target="_b" className="social_item11">
                <span style={{ color: 'white' }}>{user.Email}</span>
              </a>
              <a href="#" target="_blank" className="social_item11">
                <span style={{ color: 'white' }}>{user.LinkedIn}</span>
              </a>
              <a href="#" target="_blank" className="social_item11">
                <span style={{ color: 'white' }}>{user.Mobilenumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template3