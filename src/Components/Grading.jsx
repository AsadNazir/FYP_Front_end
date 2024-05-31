import React, { useState, useEffect } from 'react';
import { HiClipboardList, HiAdjustments, HiSearch } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { Select } from 'antd';
import TabBar from './TabBar';
import MyTable from './MyTable';
import { getAllGrades } from '../API/grades';
import { getAllSessions } from '../API/session';

const { Option } = Select;

const columns = [
    {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'grade',
    },
    {
        title: 'GPA',
        dataIndex: 'GPA',
        key: 'GPA',
    },
    {
        title: 'Range',
        dataIndex: 'range',
        key: 'range',
    },
];

function ViewGradingPolicy() {
    const [session, setSession] = useState(null);
    const [gradePolicy, setGradePolicy] = useState([]);

    useEffect(() => {

        const fetchSession = async () => {
            // Replace this with actual data fetching logic
            const response = await getAllSessions();
            setSession(response.data);
            console.log(response.data);
        }
        const fetchGradePolicy = async () => {
           
                // if(!session) return;
                // Replace this with actual data fetching logic
                const response = await getAllGrades();
                console.log(response.data);

                const fetchedData = response.data.map(grade => ({
                    // key: grade.GradeID, 
                    grade: grade.GradeName,
                    range: grade.MinPercentage + ' - ' + grade.MaxPercentage,
                    GPA:3
                }));

                setGradePolicy(fetchedData);
        
        };

        fetchSession();
        fetchGradePolicy();
    }, []);

    return (
        <div className='w-[90%] md:w-[50%] mx-auto'>
            <div className='my-4'>
                <Select
                    className='w-full shadow-md'
                    placeholder='Select Session'
                    onChange={(value) => setSession(value)}
                >
                    {session && session.map(session => (
                        <Option key={session.SessionID} value={session.SessionID}>{session.SessionName}</Option>
                    ))}
                </Select>
            </div>
            <MyTable columns={columns} data={gradePolicy} scroll={400} />
        </div>
    );
}

const TabContent = [
    {
        title: 'View Grading Policy',
        key: '1',
        component: <ViewGradingPolicy />,
        icon: <HiClipboardList />,
    },
    {
        title: 'Edit Grading Policy',
        key: '2',
        component: <h1>Edit Grading Policy</h1>,
        icon: <MdDashboard />,
    },
    {
        title: 'Add Grading Policy',
        key: '3',
        component: <h1>Add Grading Policy</h1>,
        icon: <HiAdjustments />,
    },
];

export default function Grading() {
    return <TabBar tabs={TabContent} />;
}
