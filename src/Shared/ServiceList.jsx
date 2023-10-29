import React from 'react';
import './ServiceCard.css'
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';
import  Manytemp from '../images/serviceImg/manytemp.jpg'
import  Userfriendly from '../images/serviceImg/userfriendly.jpg'
import Flexy from '../images/serviceImg/flex.jpg'


function ServiceList() {
  const ServiceData = [
    {
      imgUrl: Userfriendly,
      title: 'Easy to use',
      desc: 'Experience the ease and simplicity of our resume builder. With user-friendly features and intuitive design. ',
    },
    {
      imgUrl: Flexy,
      title: 'Flexibility and convenience',
      desc: 'Allowing users to make changes to their details of their resume with just a few clicks.'
    },
    {
      imgUrl: Manytemp,
      title: 'wide variety of templates',
      desc: 'offering multiple templates saves users time and effort in designing their resumes from scratch.  '
    }
  ];

  return (
    <><div className='d-flex  gap-5'>
      {ServiceData.map((item, index) => (
        <Col lg='4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
      </div>
    </>
  );
}
 
export default ServiceList;