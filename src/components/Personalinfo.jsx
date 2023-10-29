import { Input, Form } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
const { TextArea } = Input


const emailRegex = /^[a-zA-Z][a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;

const validateName = (rule, value, callback) => {
    if (!value) {
        callback('Please enter your first name');
    } else if (!/^[A-Za-z]+$/.test(value)) {
        callback('Should not contain numbers');
    } else if (!/^[A-Z]/.test(value)) {
        callback('Should start with a capital letter');
    } else {
        callback();
    }
};



function Personalinfo() {
    // useState for country;
    const [data, setData] = useState([]);
    const [getcountry, setCountry] = useState()
    const [getState, setState] = useState([])
    const [selectedState,setSelectedState] = useState()
    const [city,setCity] = useState([])
    useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    const country = [...new Set(data.map(item => item.country))]
    country.sort();
    const handleCountry = (e) =>{
        let states = data.filter(state => state.country === e.target.value)
        states = [...new Set(states.map(item => item.subcountry))]
        states.sort()
        setState(states)
    }
    const handleState=(e)=>{
        let cities = data.filter(city => city.subcountry === e.target.value)
        setCity(cities);
    }
    const [text1,setTextChange1] = useState(0)
    const maxtext = 400;
    const textRef1 = useRef()
    useEffect(()=>{
        setTextChange1(textRef1.current.resizableTextArea.textArea.value.length)
    },[])
    return (
        <div className="row">
            <div className='personalInfo'>

                <div className="col-md-7">
                    <Form.Item name="Firstname" label="First name" required
                        rules={[
                            { validator: validateName }
                        ]}>
                        <Input type='text' />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Lastname" label="last name" required
                        rules={[
                            { validator: validateName }
                        ]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Email" label="Email" required
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            {
                                pattern: emailRegex,
                                message: 'enter a valid email',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Mobilenumber" label="Mobilenumber" required
                        rules={[
                            { required: true, message: 'Please enter your mobile number' },
                        ]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="LinkedIn" label="LinkedIn" required
                        rules={[
                            { required: true, message: 'Please enter your LinkedIn URL' },
                        ]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Portfolio" label="Portfolio" required>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Dob" label="Dob" required>
                        <Input type='date'/>
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="country" label="Country" required>
                        <select onChange={(e)=>handleCountry(e)}>
                        <option>Select Country</option>
                            {country.map((item, index) => {
                                return <option key={index} value={getcountry}>
                                    {item}
                                </option>
                                })}
                        </select>
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="state" label="State" required>
                    <select onChange={(e)=>handleState(e)}>
                        <option>Select State</option>
                            {getState.map((item, index) => {
                                return <option key={index} value={selectedState}>
                                    {item}
                                </option>
                                })}
                        </select>
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="city" label="City" required>
                    <select>
                        <option>Select City</option>
                            {city.map((item, index) => {
                                return <option key={index}>
                                    {item.name}
                                </option>
                                })}
                        </select>
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Address" label="Area/street" required>
                        <TextArea maxLength={200} className='text'/>
                    </Form.Item>
                </div>
                <div className="col-md-7">
                    <Form.Item name="Objective" label="Objective" required>
                        <TextArea id='text1' ref={textRef1} onChange={(e)=>setTextChange1(e.target.value.length)} maxLength={400} className='text' />
                    </Form.Item>
                    <small className='words'>remaining words{maxtext-text1}</small>
                </div>
            </div>
        </div>
    )
}

export default Personalinfo