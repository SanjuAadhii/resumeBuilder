import React, { useState,useEffect} from 'react'
import { Button, Input, Form, message,Spin } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import '../resources/Authentication.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import resume from '../images/resume.jpg'

function Login() {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]+/;
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
  const onFinish = async (values) => {
    setloading(true)
    try {
      const user = await axios.post("api/user/login", values);
      setloading(false)
      message.success("Login successful");
      navigate('/home')
      localStorage.setItem("resume-user", JSON.stringify(user.data))
    } catch (error) {
      setloading(false)
      message.error("creadentials does not exist");
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('resume-user')){
     navigate('/home')
    }
  })

  return (
    <div className='auth-parent'>
      {loading && (<Spin size="large"/>)}
      <div className='image__3'>
         <img src={resume} alt='' className='resume__1'/>
      </div>
      <Form layout='vertical' onFinish={onFinish}>
        <h1>LOGIN</h1>
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
          <Input type='password' />
        </FormItem>
        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/register'>click here to register</Link>
          <Button type='primary' htmlType='submit' id='reg'>Login</Button>
        </div>
      </Form>

    </div>
  )
}

export default Login