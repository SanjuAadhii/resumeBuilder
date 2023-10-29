import React from 'react'
import '../../resources/templatecss/template2.css'
const Template2 = () => {
    const user = JSON.parse(localStorage.getItem('resume-user'))
   

    return (
        <section className='resume__2'>
        <div className='template2-parent'>
            <main className="main-content">
                <section className="left-section">
                    <div className="left-content">
                        <div className="profile">
                            <div className="imageres">
                            <img src={`http://localhost:5000/uploads/${user.photo}`} alt="picture" className='imageres1'/>
                            </div>
                            <h2 className="name1">{user.Firstname} {user.Lastname}</h2>
                            <p className="career">{user.Role}</p>
                        </div>
                        <div className="contact-info"  style={{ marginTop: "50px" }}>
                            <h3 className="main-title">Contact Info</h3>
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
                        <div className="skills-section" style={{ marginTop: "80px" }}>
                            <h3 className="main-title">Skills</h3>
                            <ul>

                                {user.skills.map((skill) => {
                                    return <li style={{ breakInside: "avoid" }}>
                                        <p className="skill-title">{skill.Technology}</p>
                                        <div className="progress-bar">
                                            <p>{skill.Rating}</p>
                                        </div>
                                    </li>
                                })}
                                {/* ... Other skill items ... */}
                            </ul>

                            <div className="interest11 " style={{ marginTop: "200px",breakInside:'avoid' }}>
                                <h3 className="main-title" style={{ marginTop: "10px", display: 'flex!important' }}>Hobbies</h3>
                                <div className="interest_items11">
                                    {
                                        user.Interest.map((int) => {
                                            return (
                                                <div style={{ color: 'white', fontSize: 17 ,breakInside: "avoid"}} >
                                                    {int.Interest}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

            <div className="certification11"  style={{ marginTop: "100px", }}>
            <h3 className="main-title">certification</h3>
            <div className="certification__item11">
              {
                user.Certification.map((cer) => {
                  return (
                    <div>
                      <p className="item__preTitle11">{cer.YearRange}</p>
                      <h4 className="item__title11" >{cer.TitleofCertification}</h4>
                      <p className="para">
                        {cer.Description}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
                    </div>
                </section>
                <section className="right-section">
                    <div className="right-main-content">
                        <section className="about sect">
                            <h2 className="right-title">About Me</h2>
                            <p className="para">
                                {user.Objective}
                            </p>
                        </section>

                        <section className="experince sect">
                            <h2 className="right-title">Experience</h2>
                            {user.Experience.slice(0, 3).map((exp) => {
                                return (
                                    <div className="timeline" style={{ breakInside: "avoid" }}>
                                        <div className="left-tl-content">
                                            <h5 className="tl-title">{exp.Company}</h5>
                                            <p className="para">YEARS : {exp.YearRange}</p>
                                        </div>
                                        <div className="right-tl-content">
                                            <div className="tl-content">
                                                <h5 className="tl-title-2">{exp.jobRole}</h5>
                                                <p className="para">{exp.Rolework}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </section>

                        <section className="education sect">
                            <h2 className="right-title">education</h2>
                            {user.education.slice(0, 3).map((edu) => {
                                return <div className="timeline" style={{ breakInside: "avoid" }}>
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">{edu.Institution}</h5>
                                        <p className="para">YEARS : {edu.YearRange}</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{edu.Qualification} Percentage : {edu.Percentage}</h5>
                                            <p className="para">
                                                {edu.EduDes}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })}


                        </section>
                        <section className="awards sect">
                            <h2 className="right-title">Projects</h2>
                            {user.Projects.map((pro) => {
                                return <div className="timeline" style={{ breakInside: "avoid" }}>
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">{pro.Title}</h5>
                                        <p className="para">{pro.YearRange}</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Excellent Work</h5>
                                            <p className="para">
                                                {pro.Description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })}


                        </section>
                    </div>
                </section>
            </main>




        </div>
        </section>
    )
}

export default Template2;