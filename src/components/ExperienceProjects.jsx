import React, { useState, useEffect, useRef } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import ProfileInfo from './profileInfo';

const ExperienceProjects = () => {

    const { TextArea } = Input;
    const [text4, setTextChange4] = useState(0)
    const [text5, setTextChange5] = useState(0)
    const maxtext = 400
    const textRef4 = useRef()
    const textRef5 = useRef()
    // useEffect(() => {
    //     setTextChange4(textRef4.current.resizableTextArea.textArea.value.length)
    //     setTextChange5(textRef5.current.resizableTextArea.textArea.value.length)
    // }, [])
    return (
        <div>
            <ProfileInfo />
            <h5 className='profiletitle'><b>Experience</b></h5>
            <hr />
            <Form.List name="Experience">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Company']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Company',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Years']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Years',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Place']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Place',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing first name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'jobRole']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Role',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Role" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-7">
                                        <Form.Item {...restField}
                                            name={[name, 'Rolework']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Work',
                                                },
                                            ]}
                                        >
                                            <TextArea ref={textRef4} onChange={(e)=>setTextChange4(e.target.value.length)} maxLength={400} placeholder='Description' className='text' />
                                        </Form.Item>
                                        <small className='words'>remaining words{maxtext - text4}</small>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 40, color: '' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>


                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
            <h5 className='profiletitle'><b>Projects</b></h5>
            <hr />
            <Form.List name="Projects">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Title']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Title',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Title" />
                                        </Form.Item>
                                    </div>


                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Description']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea ref={textRef5} onChange={(e)=>setTextChange5(e.target.value.length)} maxLength={400} placeholder='Description' />
                                        </Form.Item>
                                        <small className='words'>remaining words{maxtext - text5}</small>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing first name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Projects
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
        </div>
    )
}

export default ExperienceProjects