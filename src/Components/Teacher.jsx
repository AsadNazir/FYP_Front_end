import { React, useState } from 'react';
import { Button, Form, Radio, Input, InputNumber, Select, Row, Col } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Modal } from 'antd';
const { Dragger } = Upload;
import { HiAcademicCap, HiSearch, HiUpload } from 'react-icons/hi';
import { fontSizes } from '../styles.js';
import { studentAPI } from '../API/api.js';

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import TabBar from './TabBar.jsx';
import MyTable from './MyTable.jsx';
import { Link } from 'react-router-dom';

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



const TabContent = [
    {
        title: 'Add Teacher',
        key: '1',
        component: <AddTeacherForm />,
        icon: <HiUserCircle />,
    },
    {
        title: 'View Teacher',
        key: '2',
        component: <ViewAllTeachers />,
        icon: <MdDashboard />,
    },
    {
        title: 'Search Teacher',
        key: '3',
        component: <h1>Search Teacher</h1>,
        icon: <HiAdjustments />,
    },

]
export default function EditTeacher()
{
    return(
        <h1>Edit Teacher</h1>
    )

}
export default function Teacher() {
    return (
        <TabBar tabs={TabContent} />
    );
}

function ViewAllTeachers() {

    const columns = [
        {
            title: 'Teacher ID',
            dataIndex: 'TeacherID',
            key: 'TeacherID',
        },
        {
            title: 'Name',
            dataIndex: 'FirstName',
            key: 'FirstName',
        },
        {
            title: 'Department',
            dataIndex: 'Department',
            key: 'Department'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, { TeacherID }) => {
                return (
                    <>
                        <a className='mr-4 text-blue-700 underline'>View</a>
                        <Link to={"edit-Teacher"} className='text-blue-700 underline' >Edit</Link>
                    </>
                )
            }
        }
    ]

    const data = [
        {
            TeacherID: 1,
            FirstName: 'John Doe',
            Department: 'Computer Science'
        },
        {
            TeacherID: 2,
            FirstName: 'Jane Doe',
            Department: 'Information Technology'
        },
        {
            TeacherID: 3,
            FirstName: 'John Doe',
            Department: 'Software Engineering'
        },
        {
            TeacherID: 4,
            FirstName: 'Jane Doe',
            Department: 'Data Science'
        },
    ]

    return (
        <div className='w-[90%] md:w-[70%] mx-auto'>
            <div className='my-4'>
                <Input placeholder='Search Teacher' prefix={<HiSearch className='mr-2 ' />} className='rounded-lg txet outline-none border-gray-300' />
            </div>
            <MyTable columns={columns} data={data} />
        </div>
    )
}

export function AddTeacherForm() {

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
