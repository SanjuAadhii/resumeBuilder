import React from 'react'
import DefaultLayout from '../components/Defaultlayout'
import Template from './template/template'
import template1img from '../images/template/template1img.png'
import '../resources/maintemplate.css'
import { useNavigate } from 'react-router-dom'

const Maintemplate = () => {
  const navigate = useNavigate()
  const templating = [
    {
      title: "Resume Template",
      image: template1img
    }
  ]
  return (
    <DefaultLayout>
      <div className='row home'>
        {templating.map((tem, index) => {
          return <div className='col-md-4'>
            <div className='template1' style={{width:500}}>
              <img src={tem.image} height={400}/>
              <div id='text'>
                <p>{tem.title}</p>
                <button id='temBtn' onClick={()=>{
                  navigate(`/template/${index + 1}`)
                }}>Try</button>
              </div>

            </div>

          </div>
        })}
      </div>
    </DefaultLayout>
  )
}

export default Maintemplate