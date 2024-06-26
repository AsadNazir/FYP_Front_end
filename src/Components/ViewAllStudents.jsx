import React, { useEffect, useState } from 'react';
import { Button, Table, Form, Row, Select, Col, InputNumber, Input } from 'antd';
import { HiSearch } from 'react-icons/hi';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import TabBar from './TabBar';
import { getStudents } from '../API/student';

const { Search } = Input;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
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
        filters: [
            { text: 'Computer Science', value: 'CS' },
            { text: 'Software Engineering', value: 'SE' },
            { text: 'Information Technology', value: 'IT' },
            { text: 'Data Science', value: 'DS' }
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
        render: () => <a className='text-blue-700 underline'>View</a>,
    },
    {
        title: "Status",
        key: "status",
        dataIndex: "status",
        render: () => <span className='text-red-500'>Probation</span>
    }
];

const SearchByCGPA = () => (
    <Form className='min-w-[300px] my-5'>
        <Row>
            <Col className='flex flex-wrap md:flex-row flex-col'>
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

const StudentsOnProbation = ({ data }) => (
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

export default function ViewAllStudents() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getStudents();
            const fetchedData = response.data.map(student => ({
                key: student.StudentID,
                name: `${student.FirstName} ${student.LastName}`,
                rollNo: student.RollNo,
                department: student.DepartmentName,
                cgpa: 0
            }));
            setData(fetchedData);
        }

        fetchData();
    }, []);

    return (
        <TabBar tabs={tabContent.map(tab => ({ ...tab, component: React.cloneElement(tab.component, { data }) }))} />
    );
}

export function SearchFieldByNameOrRollNo({ data }) {
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

function SearchAndResults({ data }) {
    return (
        <div className='-z-10'>
            <Table className='shadow-md' dataSource={data} scroll={{ x: 700 }} columns={columns} />
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
        title: "Students on Probation",
        component: <StudentsOnProbation />
    }
];
