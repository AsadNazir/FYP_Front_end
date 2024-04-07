import { React, useEffect, useState } from 'react';
import { Button, Form, Radio, Input, InputNumber, Select, Row, Col } from 'antd';
import { message, Upload, Modal } from 'antd';
const { Dragger } = Upload;
import { HiAcademicCap, HiIdentification, HiSearch, HiUpload } from 'react-icons/hi';
import { fontSizes } from '../styles.js';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';

const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        lg: { span: 6 },
        // Adjust label column span for desktop
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
        lg: { span: 12 } // Adjust wrapper column span for desktop
    },
};
export function ProfileTeacher(props) {

    const [isEditable, setIsEditable] = useState(false);
    const user = useSelector(state => state.user);
    const [form] = Form.useForm();


    const ProfileItems = {
        TeacherCode: 'Default Teacher ID',
        FirstName: 'Jhone',
        LastName: 'Doe',
        Age: 25,
        Department: 'Computer Science',
        Email: '123@gmeil.com',
        PhoneNo: '123456789',

    }
    const formItemLayout2 = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }, // Adjust label column span for desktop
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }, // Adjust wrapper column span for desktop
        },
    };


    useEffect(() => {

        // Fetch the data for the given user and just display it Okaay
    }, [])
    return (
        <div className='flex flex-col md:flex-row'>

            <div className='md:w-[60%] order-2 md:order-1'>
                <Form initialValues={ProfileItems} disabled form={form} {...formItemLayout2} onFinish={() => { }} variant="outlined" className={`w-full my-10 p-10 md:p-5 ${fontSizes.small}`} >
                    {
                        Object.keys(ProfileItems).map((key, index) => {

                            return (
                                <Col className=''>
                                    <Form.Item
                                        className={``}
                                        key={index}
                                        label={key}
                                        name={key}
                                    >
                                        <Input className={`rounded-lg outline-none border-gray-300 ${fontSizes.small}`} />
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }
                </Form>
            </div>
            <div className='imageCont UpperPart md:w-[40%] order-1 md:order-2 flex justify-center items-center h-full md:min-h-[70vh]'>
                <div className='h-full flex flex-col items-center'>
                    <Avatar
                        size={{ sm: 100, lg: 120, xl: 150 }}
                        icon={<AntDesignOutlined />}
                    />
                    <p className={`text-center my-4 ${fontSizes.large} font-medium`}>
                        Jhone Doe                    </p>
                    <div className='my-4'>
                        <Upload>
                            <Button className='my-2' icon={<UploadOutlined />}>Select Image</Button>
                        </Upload>
                    </div>
                    <Button type='primary' className='bg-blue-600 text-white' size='middle'>Upload Image</Button>
                </div>
            </div>

        </div>
    )
}

export function ChangePassword() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);

        console.log(
            values
        )
        form.resetFields();
    }

    return (
        <div className='my-10 lg:w-[60%] mx-auto'>
            <Form form={form} {...formItemLayout} onFinish={onFinish} variant="outlined" className={` ${fontSizes.xxx} w-full
             p-10 md:p-0`} >

                <Col>
                    <Form.Item

                        label="Old Password"
                        name="OldPassword"
                        rules={[{ required: true, message: 'Please input Old Password!' }]}
                    >
                        <Input.Password className='rounded-lg outline-none border-gray-300' />
                    </Form.Item>
                </Col>
                <Col >
                    <Form.Item
                        label="New Password"
                        name="NewPassword"
                        rules={[{ required: true, message: 'Please input New Password!' }]}
                    >
                        <Input.Password className='rounded-lg outline-none border-gray-300' />
                    </Form.Item>
                </Col>

                <Col >
                    <Form.Item
                        label="Confirm Password"
                        name="ConfirmPassword"
                        rules={[{ required: true, message: 'Please input Confirm Password!' }]}
                    >
                        <Input.Password className='rounded-lg outline-none border-gray-300' />
                    </Form.Item>
                </Col>


                <Row className='flex justify-center'>
                    <Col>
                        <Form.Item> {/* Adjust wrapper column for button */}

                            <Button type="default" className='flex  items-center text-white bg-blue-500 ' size='large' htmlType='submit' loading={false} >
                                <HiIdentification className='mr-2 text-xl' />
                                Update Password
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}







export function EditProfileAdmin() {

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
    )
}

export function EditProfileTeacher() {
    return (
        <div>
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
        </div>
    )
}

export function EditProfileStudent() {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        values.status = 'active';

        console.log(
            values
        )
        form.resetFields();
    }

    return (
        <div>
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
                                <HiIdentification className='mr-2 text-xl' />
                                Update Data
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
