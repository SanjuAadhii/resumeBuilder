import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Template1 from './template1'
import DefaultLayout from '../../components/Defaultlayout'
import { useNavigate, useParams } from 'react-router-dom'
import Template2 from './template2'
import Template4 from './template4';
import Template3 from './template3';
import Template6 from './template6';
import Template5 from './template5';
import Templatenew from './templatenew';

const Template = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
  })
  const params = useParams();
  const getTemplate=()=>{
    switch(params.id){
      case '1': {
        return <Template1/>
      }
      case '2': {
        return <Template2/>
      }
      case '3': {
        return <Template3/>
      }
      case '4': {
        return <Template4/>
      }
      case '5': {
        return <Template5/>
      }
      case '6': {
        return <Template6/>
      }
      case '7': {
        return <Templatenew/>
      }
    }
  }
  return (
    <DefaultLayout>
    <div className='template'>
      <div className='d-flex justify-content-end my-5 mx-5'>
        <button className='backBtn' >Back</button>
        <button className='print mx-5' onClick={handlePrint}>Print</button>
      </div>
      <div ref={componentRef}>
      {getTemplate()}
      </div>
    </div>
    </DefaultLayout>
  )
}

export default Template