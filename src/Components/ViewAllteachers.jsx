import { React, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { getAllTeachers } from '../API/teacher.js';

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
        title: 'View Teacher',
        key: '2',
        component: <ViewAllTeachers />,
        icon: <MdDashboard />,
    },
    {
        title: 'Cordinator',
        key: '3',
        component: <h1>View Coordinators</h1>,
    }

]

function EditTeacherButton() {

    const navigate = useNavigate();
    const onEditTeacher = () => {
        navigate('/admin/edit-teacher')
    }
    return (
        <div className=''>

            <a className='flex  items-center underline text-blue-700' onClick={onEditTeacher}>Edit</a>

        </div>
    )

}

export default function ViewTeacher() {
    return (
        <TabBar tabs={TabContent} />
    );
}

function ViewAllTeachers() {

    const [data, setData] = useState([{}])

    const fetchTeachers = async () => {
        const response = await getAllTeachers();

        let fetchedData = response.data.map(teacher => ({
            TeacherID: teacher.TeacherID,
            FirstName: teacher.FirstName,
            Department: teacher.DepartmentName
        }))

        setData(fetchedData);
        console.log(fetchedData);
    }

    useEffect(() => {
        fetchTeachers();
    }

        , [])


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

                <EditTeacherButton />

            )

        }
    }
]

// const data = [
//     {
//         TeacherID: 1,
//         FirstName: 'John Doe',
//         Department: 'Computer Science'
//     },
//     {
//         TeacherID: 2,
//         FirstName: 'Jane Doe',
//         Department: 'Information Technology'
//     },
//     {
//         TeacherID: 3,
//         FirstName: 'John Doe',
//         Department: 'Software Engineering'
//     },
//     {
//         TeacherID: 4,
//         FirstName: 'Jane Doe',
//         Department: 'Data Science'
//     },
// ]

return (
    <div className='w-[90%] md:w-[70%] mx-auto'>
        <div className='my-4'>
            <Input placeholder='Search Teacher' prefix={<HiSearch className='mr-2 ' />} className='rounded-lg txet outline-none border-gray-300' />
        </div>
        <MyTable columns={columns} data={data} />
    </div>
)
}
