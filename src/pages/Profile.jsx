import React, { useEffect, useRef, useState } from 'react'
import Defaultlayout from '../components/Defaultlayout'
import './../resources/layout.css'
import { Form, Button, Spin, message } from 'antd';
import Personalinfo from '../components/Personalinfo';
import SkillAndEducation from '../components/skillAndEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios'
import '../resources/profile.css'
import userimg from '../images/user.png'
import { Tabs } from 'antd';
import ProfileInfo from '../components/profileInfo';

function Profile() {
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('resume-user')));
  const [image, setImage] = useState(userimg);

  const onFinish = async (values) => {
    setloading(true);
    try {
      console.log(values);
    
      const retrieve = await axios.post('api/user/update', { ...values, _id: user._id });
      localStorage.setItem('resume-user', JSON.stringify(retrieve.data));
      setUser(retrieve.data);
      setloading(false);
      message.success('Updated successfully');
    } catch (error) {
      setloading(false);
      message.error('Registration failed');
    }
  };

  useEffect(()=>{
    setImage(`http://localhost:5000/uploads/${user.photo}`)
  },[])

  const handleImageChange = async (e) => {
    console.log('handleImageChange called');
    const formData = new FormData();
    formData.append('photo', e.target.files[0],user._id);
    try {
      const response = await axios.post('http://localhost:5000/api/user/save', formData);
      localStorage.setItem('resume-user', JSON.stringify(response.data))
      setImage(`http://localhost:5000/uploads/${user.photo}`)
      console.log('Works')
      console.log(response.data.photo);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <Defaultlayout>
      <div className='parentProfile'>
        {loading && <Spin size='large' />}
        <div className='updateprofile'>
          <Form layout='vertical' onFinish={onFinish} initialValues={user} data-aos="fade-up" data-aos-delay="10">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation" id='proimage'>
                {image && <img src={`http://localhost:5000/uploads/${user.photo}`} height={150} width={187} id='uploadimg' alt="User Image" />}
              </li>
              <li className="nav-item" role="presentation">
                <label id='upload' htmlFor="imags">Upload Image</label>
              </li>

              <li className="nav-item" role="presentation">
              <input type="file" id="imags" accept="image/png, image/jpeg, image/jpg" name='photo' onChange={(e) => handleImageChange(e)} />
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal Info</button>
              </li>
              <li className="na v-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Education & Skills</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Work Experience/Projects</button>
              </li>
              <li className='updateBtnli'><Button className='updateBtn' htmlType='submit'>Update</Button></li>
            </ul>
            <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-delay="10">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><ProfileInfo /><Personalinfo /></div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><SkillAndEducation /></div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><ExperienceProjects /></div>
            </div>
          </Form>
        </div>
      </div>
      <div className='mobile_parentProfile'>
        <Form layout='vertical' onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Personal" key="1">
              <div className='mob_personal'>
              <ProfileInfo/>
              <div className='displayImage'>
              <li className="nav-item" role="presentation" id='proimage'>
                {image && <img src={image} height={150} width={187} id='uploadimg' alt="User Image" />}
              </li>
              <li className="nav-item" role="presentation">
                <label id='upload' htmlFor="imags">Upload Image</label>
              </li>              
              </div>
              <br/>
              <Personalinfo />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Skill And Education" key="2">
              <div className='mob_personal'>
              <SkillAndEducation />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experience" key="3">
              <div className='mob_personal'>
              <ExperienceProjects />
              </div>
            </Tabs.TabPane>
          </Tabs>
          <Button className='updateBtn' htmlType='submit'>Update</Button>
        </Form>
      </div>

    </Defaultlayout>
  )
}

export default Profile