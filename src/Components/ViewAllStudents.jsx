import React from 'react';
import { Button, Table, Form, Row, Select, Col } from 'antd';
import { Input, InputNumber } from 'antd';
import { HiSearch } from 'react-icons/hi';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import TabBar from './TabBar';



const { Search } = Input;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',

        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Roll No',
        dataIndex: 'rollNo',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        // width: 150,
        filters: [
            {
                text: 'Computer Science',
                value: 'CS',
            },
            {
                text: 'Software Engineering',
                value: 'SE',
            },
            {
                text: 'Information Technology',
                value: 'IT',
            },
            {
                text: 'Data Science',
                value: 'DS',
            }
        ],
        onFilter: (value, record) => record.department.indexOf(value) === 0,
    },
    {
        title: 'CGPA',
        dataIndex: 'cgpa',
    
        sorter: (a, b) => a.cgpa - b.cgpa,
    },
    {
        title: 'Action',
        key: 'operation',
        // width: 100,
        render: () => <a className='text-blue-700 underline'>View</a>,
    },
    {
        title: "Status",
        key : "status",
        // fixed: 'right',
        dataIndex: "status",
        render: () => <span className='text-red-500'>Probation</span>
    }



];
const data = [
    {
        key: '1',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.0,
    },
    {
        key: '2',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.9,
    },
    {
        key: '3',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.53,
    },
    {
        key: '4',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.98,
    },
    {
        key: '5',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.0,
    },
    {
        key: '6',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.5,
    },
    {
        key: '7',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.5,
    },
    {
        key: '7',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.5,
    },

];


const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const SearchByCGPA = () => {
    return (
        <Form className='min-w-[300px] my-5'>
            <Row>
                <Col className='flex flex-wrap md:flex-row flex-col'
                >
                    <Form.Item
                        label="MAX CGPA"
                        name="maxCGPA"
                        className='mr-2'
                        rules={[{ required: true, message: 'Please input Age!' }]}
                    >
                        <InputNumber className='w-[80%]' min={0} max={4} defaultValue={4} />
                    </Form.Item>

                    <Form.Item
                        label="MIN CGPA"
                        name="minCGPA"
                        rules={[{ required: true, message: 'Please input Age!' }]}
                    >
                        <InputNumber className='w-[80%]' min={0} max={4} defaultValue={1} step={0.1} />
                    </Form.Item>
                    <div>
                        <Button type="primary" className='ml-2 bg-blue-600'>Search</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}


const StudentsOnProbation = () => {
    return (
        <div className='w-[90%] md:w-[70%] min-w-[300px] mx-auto'>
            <div className='min-w-[300px] my-5 flex'>
                <Input
                    className='p-2'
                    prefix={<HiSearch className='text-lg mr-2' />}
                    placeholder="Enter name or Roll No of the Student"
                    allowClear
                />
                <Button type="primary" className='ml-2 bg-blue-600 h-10'>Search</Button>
            </div>
            <SearchAndResults data={data} />
        </div>
    );
}



export default function ViewAllStudents() {

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


    return (
        <TabBar tabs={tabContent} />
    );
}

export function SearchFieldByNameOrRollNo() {
    return (
        <div className='w-[90%] mx-auto md:w-[70%]'>
            <div className='min-w-[300px] my-5 flex'>
                <Input
                    className='p-2'
                    prefix={<HiSearch />}
                    placeholder="Enter name or Roll No of the Student"
                    allowClear
                />
                <Button type="primary" className='ml-2 bg-blue-600 h-10'>Search</Button>
            </div>
            <SearchAndResults data={data} />
        </div>
    );
}


function SearchAndResults(props) {
    return (
        <div className='-z-10'>
            <Table className='shadow-md' dataSource={props.data} scroll={{x:700}} columns={columns} onChange={onChange} />
        </div>
    );
}


const tabContent = [
    {
        title: "Search By Name",
        component: <SearchFieldByNameOrRollNo />
    },
    {
        title: "Search By CGPA",
        component: <SearchByCGPA />
    },
    {
        title: "Students on Probabtion",
        component: <StudentsOnProbation />
    }
]
