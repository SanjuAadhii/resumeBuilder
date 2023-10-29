import React from 'react'
import '../../resources/templatecss/template.css'
const Template1 = () => {
    const user = JSON.parse(localStorage.getItem('resume-user'))
    return (
        <div className='template1-parent'>
            <div className='top d-flex justify-content-between'>
                <h1>{user.Firstname.toUpperCase()} {user.Lastname.toUpperCase()}</h1>
                <div>
                    <p>{user.Email}</p>
                    <p>{user.Address}</p>
                    <p>{user.Mobilenumber}</p>
                </div>
            </div>
            <div className='divider mt-5'></div>
            <div className='objective mt-5'>
                <h3>Objective</h3>
                <hr />
                <p>{user.Objective}</p>
            </div>
            <div className='divider mt-5'></div>

            <div className='education mt-5'>
                <h3>Education</h3>
                <hr />
                {user.education.map((edu) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: 120 }}><b>{edu.YearRange}: </b></h6>
                        <p><b>{edu.Qualification}</b> with <b>{edu.Percentage}%</b> in <b>{edu.Institution}</b></p>
                    </div>
                })}
            </div>
            <div className='divider mt-5'></div>
            <div className='experience mt-5'>
                <h3>Experience</h3>
                <hr />
                {user.Experience.map((exp) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: 120 }}><b>{exp.YearRange}: </b></h6>
                        <p><b>{exp.Company}</b> in <b>{exp.Place}</b></p>
                    </div>
                })}
            </div>

            <div className='divider mt-5'></div>
            <div className='projects mt-5'>
                <h3>Project</h3>
                <hr />
                {user.Projects.map((pro) => {
                    return <div className='d-flex flex-column'>
                        <h6><b>{pro.Title}[ {pro.YearRange} ] </b></h6>
                        <p>{pro.Description}</p>
                    </div>
                })}
            </div>

            <div className='divider mt-5'></div>
            <div className='skill mt-5'>
                <h3>Skills</h3>
                <hr />
                {user.skills.map((skill) => {
                    return <p>{skill.Technology} with rating {skill.Rating}</p> 
                })}
            </div>
        </div>
    )
}

export default Template1