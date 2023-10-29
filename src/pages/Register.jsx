import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Form, Checkbox, message, Spin } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import '../resources/Authentication.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import resume from '../images/resume.jpg'

function Register() {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]+/;
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
  const onFinish = async (values) => {
    setloading(true);
    try {
        await axios.post("api/user/register", values);
        setloading(false);
        message.success("Registration successful");
    } catch (error) {
        setloading(false);
        if (error.response) {
            if (error.response.status === 400) {
                message.error("Registration failed: Username already exists");
            } else {
                message.error("Registration failed : Network error");
            }
        } else if (error.request) {
            message.error("Registration failed: No response received");
        } else {
            message.error("Registration failed: Error setting up the request");
        }
    }
};

  useEffect(() => {
    if (localStorage.getItem('resume-user')) {
      navigate('./home')
    }
  })


  return (
    
    <div className='auth-parent'>
      {loading && (<Spin size="large" />)}
      <div className='image__3'>
         <img src={resume} alt='' className='resume__1'/>
      </div>
      <Form layout='vertical' onFinish={onFinish}>
        <h1>REGISTER</h1>
        <hr></hr>
        <FormItem name='username' label='Username'
          rules={[
            { required: true, message: 'Please enter your username' },
            {
              pattern: usernameRegex,
              message: 'Username should not start with numbers',
            },
          ]}
        >
          <Input type='text' required />
        </FormItem>
        <FormItem
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Please input your email' },
            {
              pattern: emailRegex,
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input type='email' required />
        </FormItem>
        <FormItem name='password' label='Password'>
          <Input />
        </FormItem>

        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/login'>Aldready have an account? Login</Link>
          <Button type='primary' htmlType='submit' id='reg'>Register</Button>
        </div>
      </Form>

    </div>
  )
}

export default Register