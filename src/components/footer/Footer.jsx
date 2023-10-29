import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png'
import { RiYoutubeFill, RiInstagramFill, RiFacebookCircleFill } from 'react-icons/ri';  // Import Remix Icons

function footer() {
  const quick__links = [
    {
      path: '#',
      display: 'Arvind Vikram'
    },
    {
      path: '#',
      display: 'Vijayprasanth'
    },
    {
      path: '#',
      display: 'Sanjay Aadhith '
    },

  ];
  const quick__links2 = [
    {
      path: '#',
      display: 'Home'
    },
    {
      path: '#',
      display: 'About'
    },
    {
      path: '#',
      display: 'contact'
    }

  ]
  return (
    <footer className='footer'>

      <Container className='foot__contain'>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt=''/>
              <p>Empower your career with our resume builder</p>
              <div className='social__links d-flex align-items-center gap-4'>
              <span>
              <Link to='#'><RiYoutubeFill className='icon__foot'/></Link>
            </span>
            <span>
              <Link to='#'><RiInstagramFill className='icon__foot'/></Link>
            </span>
            <span>
              <Link to='#'><RiFacebookCircleFill className='icon__foot'/></Link>
            </span>
          </div>
              </div>
            
          </Col>
          <Col lg='3' className='footer__1'>
            <h5 className='footer__link-title'>Made By</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Follow us</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer