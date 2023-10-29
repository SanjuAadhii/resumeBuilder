import React from 'react'
import {Container,Col,Row, Button} from 'reactstrap'
import Defaultlayout from '../components/Defaultlayout'
import fronter from '../images/fronter.jpg'
import star from '../images/star.png'
import resumeImg from '../images/resume-generator.gif'
import './../resources/home.css'
import ServiceList from '../Shared/ServiceList'
import ImgSlider from '../slider/ImgSlider'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'


function Home() {
  
  return (
    <Defaultlayout>
      <div>
     <section>
     <Container className='title__sec'>
          <Row>
            <Col lg='8'>
              <div className='resume__content mt-5'>
                <h1>Resume
                  <span className='highlight'>Builder</span>
                </h1>
                <p className='para__1'>Build beautiful, recruiter-tested resumes in a few clicks!<br/> Our resume builder is powerful and easy to use, with a range of <br/>amazing functions. Custom-tailor resumes for any job within minutes.<br/> Increase your interview chances and rise above the competition.
                </p>
              </div>
              <Link to='/template'><Button className='start__button mt-5'>Try now</Button></Link>
            </Col>
            {/* img sec starts */}
            <Col lg='4' className='mt-5'>
              <div className='img1con'>
                <img src={resumeImg} alt='' />
              </div>
            </Col>
           
          </Row>
        </Container>
            </section>
 {/* ///resumetitle section ends             */}
 <section className='advertise__sec'>
     <Container className='resume__adversec '>
      <Row className='d-flex align-items-center gap-5'>
        <Col lg='6'>
          <div className='fronter__div'>
        <img src={fronter} alt='' className='fronter__img' />
        </div>
        </Col>
        <Col lg='5'>
          <div className='resume__content2 mt-5'>
          <h1>Create a resume to 
                  <span className='highlight'> land your next job</span>
                </h1>
          <p className='para__1 mt-5'>We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.</p>
          </div>
          <Link to='/profile'><Button className='start__button2 mt-5'>Update Profile</Button></Link>
        </Col>
      </Row>

     </Container>
     <Container className='service__con'>
        <Row className='mt-5'>
          <Col lg='3'>
            <h5 className='service__subtitle'>What's new?</h5>
            
          </Col>
          <Col lg='9' > {/* Use the same Row for both the content */}
            <ServiceList />
          </Col>
        </Row>
      </Container>
 </section>

 <section className='slide__sec'>
        <Container className='mt-5'>
          <Row>
            <Col lg='12'>
              <h2 className='testimonial__title'>TEMPLATES</h2>
            </Col>
            <Col>
            <ImgSlider/></Col>
          </Row>
        </Container>
      </section>
      </div>
      
      
    <section>
      <Footer/>
    </section>
    </Defaultlayout>
  
  )
}

export default Home