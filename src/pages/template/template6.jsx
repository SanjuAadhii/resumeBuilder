import React from 'react'
import '../../resources/templatecss/template6.css'
const Template6 = () => {
  const user = JSON.parse(localStorage.getItem('resume-user'))

  return (
    <div className='template6'>
      <div class="resume66">
        <div class="resume_left66">
          <div class="resume_profile66">
            <img src={`http://localhost:5000/uploads/${user.photo}`} alt="profile_pic" />
          </div>
          <div class="resume_content66">
            <div class="resume_item66 resume_info6666">
              <div class="title66">
                <p class="bold66">{user.Firstname} {user.Lastname}</p>
                <p class="regular66">{user.Role}</p>
              </div>
              <ul>
                <li>
                  <div class="data66" style={{ display: 'flex-warp' }}>
                    {user.Objective}
                  </div>
                </li>
              </ul>
            </div>
            <div class="resume_item66 resume_skills66">
              <div class="title66">
              <br/>
              <br/>
                <p class="bold66">skill's</p>
              </div>
              <ul>
                {
                  user.skills.slice(0, 3).map((skill) => {
                    return (
                      <li className='skill_list66'>
                        <div class="skill_name66">
                          {skill.Technology}
                        </div>
                        <div class="skill_per66">{skill.Rating}/10</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <div class="resume_item66 resume_skills66">
            <div class="title66">
             
              <p class="bold66">Certification</p>
            </div>
            <ul>
              {user.Certification.slice(0.3).map((cer) => {
                return (
                  <li className='cer_list66'>
                    <div>{cer.YearRange}-{cer.TitleofCertification}
                    <p>{cer.Description}</p></div>
                    
                  </li>
                )
              })}
            </ul>
          </div>
          
            <div class="resume_item66 resume_skills66">
              <br/>
              <br/>
              <br/>
              <div class="title66">
                <p class="bold66">Hobby</p>
              </div>
              <ul>
                {user.Interest.slice(0, 3).map((int) => {
                  return <li className='int_list66' style={{ padding: 10, fontSize: 10 }}>{int.Interest}</li>
                })}
              </ul>
            </div>
            <div class="resume_item66 resume_social66">
              <div class="title66">
                <p class="bold66">Contact</p>
              </div>
              <ul>
                <li>
                  <div class="data66" style={{ display: 'flex-warp' }}>
                    {user.Address},{user.city},{user.country}
                  </div>
                </li>
                <li>
                  <div class="data66">
                    {user.Mobilenumber}
                  </div>
                </li>
                <li>
                  <div class="data66">
                    {user.Email}
                  </div>
                </li>
                <li>
                  <div class="data66">
                    {user.LinkedIn}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resume_right66">
          <div class="resume_item66 resume_about66">
            <div class="title66">
              <p class="bold66">About</p>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
          </div>
          <div class="resume_item66 resume_work66">
            <div class="title66">
              <p class="bold66">Work Experience</p>
            </div>
            <ul>
              {
                user.Experience.slice(0, 3).map((exp) => {
                  return (
                    <li>
                      <div class="date66">{exp.YearRange},{exp.jobRole}</div>
                      <div class="info66">
                        <p class="semi-bold66">{exp.Company},{exp.Place}</p>
                        <p>{user.Rolework}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <br />
          <br/>
          <br/>
          <br/>
          <div class="resume_item66 resume_education66">
            <div class="title66">
              <p class="bold66">Education</p>
            </div>
            <ul style={{padding:10}}>
              {user.education.slice(0.3).map((edu) => {
                return (
                  <li className='edu_list66'>
                    <div class="date66">{edu.YearRange}
                    <div class="info66">
                      <p class="semi-bold66">{edu.Qualification}- {edu.Institution} - {edu.Percentage}%</p>
                    </div></div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div class="resume_item66 resume_education66">
            <div class="title66">
              <br/>
              <br/>
              <p class="bold66">Projects</p>
            </div>
            <ul>
              {user.Projects.slice(0.3).map((pro) => {
                return (
                  <li className='pro_list66'>
                    <div class="date66">{pro.YearRange}</div>
                    <div class="info66">
                      <p class="semi-bold66">{pro.Title}</p>
                      <p >{pro.Description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template6