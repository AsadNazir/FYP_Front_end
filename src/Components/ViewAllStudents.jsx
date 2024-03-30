import React from 'react';
import { Button, Table, Form, Row, Select, Col } from 'antd';
import { Input, InputNumber } from 'antd';
import { HiSearch } from 'react-icons/hi';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";



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
        fixed: 'right',
        width: 100,
        render: () => <a className='text-blue-700 underline'>View</a>,
    },
    {
        title:"Status",
        dataIndex:"status",
        render:()=> <span className='text-red-500'>Probation</span>
    }



];
const data = [
    {
        key: '1',
        name: 'John Brown',
        rollNo: 'BSEF20M534',
        department: 'CS',
        cgpa: 3.5,
    },

];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};


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
        <Tabs aria-label="Tabs with icons" style="underline" className=''>
            <Tabs.Item active title="Search By Name">
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
            </Tabs.Item>
            <Tabs.Item active title="View All Students">
                <div className='w-[90%] md:w-[70%] min-w-[300px] mx-auto'>
                    <SearchAndResults data={data} />
                </div>
            </Tabs.Item>
            <Tabs.Item title="Search By CGPA">
                <div className='w-[90%] md:w-[70%] min-w-[300px] mx-auto'>
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
                    <SearchAndResults data={data} />
                </div>
            </Tabs.Item>
            <Tabs.Item title="Students on Probabtion">
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
            </Tabs.Item>
        </Tabs >
    );
}

function SearchFieldByNameOrRollNo() {
    <div className='w-[90%] md:w-[80%] min-w-[300px] mx-auto my-5 flex'>
        <Input
            className='p-2'
            prefix={<HiSearch />}
            placeholder="Enter name or Roll No of the Student"
            allowClear
        />
        <Button type="primary" className='ml-2 bg-blue-600 h-10'>Search</Button>
    </div>
}
function SearchAndResults(props) {
    return (
        <div className=''>
            <Table className='' dataSource={props.data} columns={columns} onChange={onChange} />
        </div>
    );
}
