import { React, useState } from 'react';
import { Button, Form, Radio, Input, InputNumber, Select, Row, Col } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Modal } from 'antd';
const { Dragger } = Upload;
import { HiAcademicCap, HiSearch, HiUpload } from 'react-icons/hi';
import { fontSizes } from '../styles.js';
import { studentAPI } from '../API/api.js';

import TabBar from './TabBar.jsx';
import Table from './MyTable.jsx';
import MyTable from './MyTable.jsx';

const TabContent = [
    {
        title: 'Add Course',
        key: '1',
        component: <AddCourse />,
        // icon: <HiUserCircle />,
    },
    {
        title: 'View Course',
        key: '2',
        component: <ViewAllCourses />,
        // icon: <MdDashboard />,
    },
    {
        title: 'Offer Course',
        key: '3',
        component: <h1>Offer Course</h1>,
        // icon: <HiAdjustments />,
    },
    {
        title: 'Register Course',
        key: '4',
        component: <h1>Regsiter Course</h1>,
    }
    ,
    {
        title: 'Road Map',
        key: '5',
        component: <h1>Road Map</h1>,
    
    }

]




export default function Course() {
    return (
        <TabBar tabs={TabContent} />
    );
}

export function AddCourse() {

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
            {/* <h1 className={`text-center ${fontSizes.xLarge} font-medium my-5`}>Add Teachers</h1> */}
            <div className='flex justify-center items-center my-5'>
                <Button type="default" className='flex  items-center text-white bg-blue-500' htmlType='button' loading={false} onClick={showModal} >
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
            <Form form={form} onFinish={onFinish} variant="outlined" className={` ${fontSizes.medium} w-full md:max-w-[800px] mx-auto w-max-[300px] p-10 md:p-0`} >

                <Row className="flex flex-col"> {/* Add gutter for spacing between columns */}
                    <Col> {/* Adjust column span for mobile and desktop */}
                        <Form.Item
                            label="Course Code"
                            name="CourseCode"
                            className='max-w-[400px]'
                            rules={[{
                                required: true, message: 'Please input Roll No!'

                            }]}
                        >
                            <Input className='rounded-lg outline-none border-gray-300' min={1} max={99} />
                        </Form.Item>
                    </Col>
                    <Col> {/* Adjust column span for mobile and desktop */}
                        <Form.Item
                            label="Course Name"
                            name="FirstName"
                            rules={[{ required: true, message: 'Please input First Name!' }]}
                            className='max-w-[400px]'
                        >
                            <Input className='rounded-lg outline-none border-gray-300' />
                        </Form.Item>
                    </Col>
                    <Col >
                        <Form.Item
                            label="Credit Hours"
                            name="CreditHours"
                            rules={[{ required: true, message: 'Please input Last Name!' }]}
                            className='max-w-[400px]'
                        >
                            <InputNumber className='rounded-lg outline-none border-gray-300' min={0} max={10} step={0.5} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row className='flex justify-center'>
                    <Col>
                        <Form.Item> {/* Adjust wrapper column for button */}
                            <Button type="default" className='flex  items-center text-white bg-blue-500 ' htmlType='submit' loading={false} >
                                <HiAcademicCap className='mr-2 text-xl' />
                                Add Course
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>


            </Form>
        </>
    );
}

const columns = [
    {
        title: 'Course Code',
        dataIndex: 'CourseCode',
        key: 'CourseCode',
    },
    {
        title: 'Course Name',
        dataIndex: 'CourseName',
        key: 'CourseName',
    },
    {
        title: 'Credit Hours',
        dataIndex: 'CreditHours',
        key: 'CreditHours',
    },
    {
        title: 'Action',
        dataIndex: 'Action',
        key: 'Action',
        render: () => <a href='/' className='underline text-blue-700' type="primary">View</a>,
    },
];

const data =
    [
        {
            key: '1',
            CourseCode: 'CS-101',
            CourseName: 'Introduction to Computer Science',
            CreditHours: 3,
        },
        {
            key: '2',
            CourseCode: 'CS-102',
            CourseName: 'Data Structures',
            CreditHours: 3,
        },
        {
            key: '3',
            CourseCode: 'CS-103',
            CourseName: 'Software Engineering',
            CreditHours: 3,
        },
        {
            key: '4',
            CourseCode: 'CS-104',
            CourseName: 'Database Management Systems',
            CreditHours: 3,
        },
        {
            key: '5',
            CourseCode: 'CS-105',
            CourseName: 'Operating Systems',
            CreditHours: 3,
        },
        {
            key: '6',
            CourseCode: 'CS-106',
            CourseName: 'Web Development',
            CreditHours: 3,
        },
        {
            key: '7',
            CourseCode: 'CS-107',
            CourseName: 'Mobile App Development',
            CreditHours: 3,
        },
        {
            key: '8',
            CourseCode: 'CS-108',
            CourseName: 'Artificial Intelligence',
            CreditHours: 3,
        },
        {
            key: '9',
            CourseCode: 'CS-109',
            CourseName: 'Machine Learning',
            CreditHours: 3,
        },
        {
            key: '10',
            CourseCode: 'CS-110',
            CourseName: 'Data Science',
            CreditHours: 3,
        },
    ]


function ViewAllCourses() {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto'>
            <div className='min-w-[300px] my-5 flex'>
                <Input
                    className='p-2'
                    prefix={<HiSearch className='text-lg mr-2' />}
                    placeholder="Enter name or Roll No of the Student"
                    allowClear
                />
                <Button type="primary" className='ml-2 bg-blue-600 h-10'>Search</Button>
            </div>
            <MyTable columns={columns} data={data} />
        </div>
    );
}

