import React from 'react'
import DefaultLayout from '../components/Defaultlayout'
import Template from './template/template'
import template1img from '../images/template/template1img.png'
import template2img from '../images/template/template2img.png'
import template3img from '../images/template/template3img.png'
import template4img from '../images/template/template4img.png'
import '../resources/maintemplate.css'
import { useNavigate } from 'react-router-dom'

const Maintemplate = () => {
  const navigate = useNavigate()
  const templating = [
    {
      title: "Resume Template 1",
      image: template1img
    },
    {
      title: "Resume Template 2",
      image: template2img
    },
    {
      title: "Resume Template 3",
      image: template3img
    },
    {
      title: "Resume Template 4",
      image: template4img
    },
    
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