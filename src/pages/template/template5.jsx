import React from 'react'
import '../../resources/templatecss/template5.css'
const template5 = () => {
  const user = JSON.parse(localStorage.getItem('resume-user'))
  return (
    <div className='template5'>
      <div class="wrapper55">
        <div class="resume55">
          <div class="left55">
            <div class="img_holder55">
              <img src={`http://localhost:5000/uploads/${user.photo}`} alt="picture" />
            </div>
            <div class="contact_wrap pb55">
              <div class="title55">
                Contact
              </div>
              <div class="contact55">
                <ul>
                  <li>
                    <div class="li_wrap55">
                      <div class="icon55"><i class="fas fa-mobile-alt" aria-hidden="true"></i></div>
                      <div class="text55">{user.Mobilenumber}</div>
                    </div>
                  </li>
                  <li>
                    <div class="li_wrap55">
                      <div class="icon55"><i class="fas fa-envelope" aria-hidden="true"></i></div>
                      <div class="text55">{user.Email}</div>
                    </div>
                  </li>
                  <li>
                    <div class="li_wrap55">
                      <div class="icon55"><i class="fab fa-weebly" aria-hidden="true"></i></div>
                      <div class="text55">{user.LinkedIn}</div>
                    </div>
                  </li>
                  <li>
                    <div class="li_wrap55">
                      <div class="icon55"><i class="fas fa-map-signs" aria-hidden="true"></i></div>
                      <div class="text55">{user.Address},{user.city},{user.country}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="skills_wrap pb55">
              <div class="title55">
                Skills
              </div>
              <div class="skills55">
                <ul>
                  {
                    user.skills.slice(0,3).map((skill) => {
                      return (
                        <li>
                          <div class="li_wrap55">
                            <div class="icon55"><i class="fa-solid fa-feather"></i></div>
                            <div class="text55">{skill.Technology}</div>
                            <div class="text55">{skill.Rating}</div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div class="hobbies_wrap pb55">
              <div class="title55">
                hobbies
              </div>
              <div class="hobbies55">
                <ul>
                  {
                    user.Interest.slice(0,3).map((int) => {
                      return (<li>
                        <div class="li_wrap55">
                          <div class="icon55"><i class="fas fa-book"></i></div>
                          <div class="text55">{int.Interest}</div>
                        </div>
                      </li>)
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div class="right55">
            <div class="header55">
              <div class="name_role55">
                <div class="name55">
                  {user.Firstname} {user.Lastname}
                </div>
                <div class="role55">
                  {user.Role}
                </div>
              </div>
              <div class="about55">
                {user.Objective}
              </div>
            </div>
            <div class="right_inner55">
              <div class="exp55">
                <div class="title55">
                  <br/>
                  experience
                </div>
                <div class="exp_wrap55">
                  <ul>
                    {
                      user.Experience.slice(0,3).map((exp) => {
                        return (
                          <li>
                            <div class="li_wrap55">
                              <div class="date55">
                                {exp.YearRange}
                              </div>
                              <div class="info55">
                                <p class="info_title55">
                                  {exp.jobRole}
                                </p>
                                <p class="info_com55">
                                  {exp.Company}
                                </p>
                                <p class="info_cont55">
                                  {exp.Rolework}
                                </p>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <div class="education55">
                <div class="title55">
                  Education
                </div>
                <div class="education_wrap55">
                  <ul>
                    {
                      user.education.slice(0,3).map((edu)=>{
                        return(
                          <li>
                          <div class="li_wrap55">
                            <div class="date55">
                              {edu.YearRange}
                            </div>
                            <div class="info55">
                              <p class="info_title55">
                                {edu.Qualification}
                              </p>
                              <p class="info_com55">
                                {edu.Institution}
                              </p>
                              <p class="info_cont55">
                                {edu.EduDes}                              </p>
                            </div>
                          </div>
                        </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default template5