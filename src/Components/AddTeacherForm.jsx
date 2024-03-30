import {React, useState} from 'react';
import { Button, Form, Radio, Input, InputNumber, Select, Row, Col } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Modal } from 'antd';
const { Dragger } = Upload;
import { HiAcademicCap, HiUpload } from 'react-icons/hi';
import { fontSizes } from '../styles';
import { studentAPI } from '../API/api';

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }, // Adjust label column span for desktop
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }, // Adjust wrapper column span for desktop
    },
};



export default function Teacher() {
    return (
        <Tabs aria-label="Tabs with icons" style="underline">
            <Tabs.Item active title="Add Teacher">
              <AddTeacherForm/>
            </Tabs.Item>
            <Tabs.Item title="View Teacher">
                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Search Teacher" icon={HiAdjustments}>
                This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item disabled title="Disabled">
                Disabled content
            </Tabs.Item>
        </Tabs>
    );
}

function AddTeacherForm() {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    // function to show modal
    const showModal = () => {
        setOpen(true);
    };

    // handling ok here
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    //   handling cancel here
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };


    const props = {
        name: 'file',
        multiple: true,
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    // creating a form hook
    const [form] = Form.useForm();

    // function to handle form submission
    const onFinish = (values) => {
        console.log('Success:', values);
        values.status = 'active';

        console.log(
            values
        )


        form.resetFields();
    };




    return (
        <>
            <h1 className={`text-center ${fontSizes.xLarge} font-medium my-5`}>Add Teachers</h1>
            <div className='flex justify-center items-center my-10'>
                <Button type="default" className='flex  items-center text-white bg-blue-500' size='large' htmlType='button' loading={false} onClick={showModal} >
                    <HiUpload className='mr-2 text-xl' />
                    Upload File
                </Button>
            </div>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okButtonProps={{ className: 'bg-blue-500 text-white' }}
            >
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Please Upload the File Containing all the Teacher records.
                    </p>
                </Dragger>
            </Modal>
            <Form form={form} {...formItemLayout} onFinish={onFinish} variant="outlined" className={` ${fontSizes.xxx} w-full md:max-w-[800px] mx-auto w-max-[300px] p-10 md:p-0`} >

                <Row > {/* Add gutter for spacing between columns */}
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}> {/* Adjust column span for mobile and desktop */}
                        <Form.Item
                            label="Teacher ID"
                            name="TeacherCode"
                            rules={[{
                                required: true, message: 'Please input Roll No!'

                            }]}
                        >
                            <Input className='rounded-lg outline-none border-gray-300' min={1} max={99} />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}> {/* Adjust column span for mobile and desktop */}
                        <Form.Item
                            label="First Name"
                            name="FirstName"
                            rules={[{ required: true, message: 'Please input First Name!' }]}
                        >
                            <Input className='rounded-lg outline-none border-gray-300' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Last Name"
                            name="LastName"
                            rules={[{ required: true, message: 'Please input Last Name!' }]}
                        >
                            <Input className='rounded-lg outline-none border-gray-300' />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Age"
                            name="Age"
                            rules={[{ required: true, message: 'Please input Age!' }]}
                        >
                            <InputNumber min={10} max={40} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Gender"
                            name="Gender"
                            rules={[{ required: true, message: 'Please select Gender!' }]}
                        >
                            <Select>
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[{ required: true, message: 'Please input Email!' }]}
                        >
                            <Input className='rounded-lg outline-none border-gray-300' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Phone No"
                            name="PhoneNo"
                        >
                            <Input className='rounded-lg outline-none border-gray-300' size='small' />
                        </Form.Item>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                        <Form.Item
                            label="Department"
                            name="DepartmentID"
                            required
                            rules={[{ required: true, message: 'Please select Department!' }]}
                        >
                            <Select>
                                <Option value="1">Computer Science</Option>
                                <Option value="2">Information Technology</Option>
                                <Option value="3">Software Engineering</Option>
                                <Option value="4">Data Science</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row className='flex justify-center'>
                    <Col>
                        <Form.Item> {/* Adjust wrapper column for button */}
                            <Button type="default" className='flex  items-center text-white bg-blue-500 ' size='large' htmlType='submit' loading={false} >
                                <HiAcademicCap className='mr-2 text-xl' />
                                Add Teacher
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}
