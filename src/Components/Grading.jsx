import React from 'react'
import { HiClipboardList, HiAdjustments, HiSearch } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import TabBar from './TabBar.jsx'
import MyTable from './MyTable.jsx'
import { Input, Select } from 'antd'


const { Option } = Select


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

]

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
    }
]

export default function Grading() {
    return (
        <TabBar tabs={TabContent} />
    )

}


const gradePolicy=[
    {
        grade:'A',
        GPA:4.0,
        range:'90-100'
    },
    {
        grade:'A-',
        GPA:3.0,
        range:'80-89'
    },
    {
        grade:'B+',
        GPA:2.0,
        range:'70-79'
    },
    {
        grade:'B-',
        GPA:1.0,
        range:'60-69'
    },
    {
        grade:'B',
        GPA:0.0,
        range:'0-59'
    },
    {
        grade:'W',
        GPA:0.0,
        range:'Withdrawn'
    }


    
]

function handleEdit(key, column, value) {
    const newData = [...editableData];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, [column]: value });
        setEditableData(newData);
    }
}

function ViewGradingPolicy() {
    return (
        <div className='w-[90%] md:w-[50%] mx-auto'>
            <div className='my-4'>
                <Select className='w-full shadow-md' placeholder='Select Session' defaultActiveFirstOption={true}>
                    <Option value={'1'} key={'1'}>1</Option>
                    <Option key={'2'} value={'2'}>2</Option>
                    <Option key={'3'} value={'3'}>3</Option>
                </Select>
            </div>
            <MyTable columns={columns} data={gradePolicy} scroll={400} />
        </div>
    )
}


function EditGradingPolicy() {
    const [searchTerm, setSearchTerm] = useState('');
    const [editableData, setEditableData] = useState(gradePolicy);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchTerm(value);

        const filteredData = gradePolicy.filter((item) =>
            item.grade.toLowerCase().includes(value.toLowerCase())
        );
        setEditableData(filteredData);
    };

    return (
        <div className="w-[98%] md:w-[50%] mx-auto">
            <div className="my-4">
                <Select className="w-full shadow-md" placeholder="Select Session" defaultActiveFirstOption={true}>
                    <Option value="1" key="1">1</Option>
                    <Option value="2" key="2">2</Option>
                    <Option value="3" key="3">3</Option>
                </Select>
            </div>
            <div className="my-4">
                <Input
                    placeholder="Search Grade"
                    value={searchTerm}
                    onChange={handleSearch}
                    prefix={<HiSearch />}
                />
            </div>
            <Table columns={columns} dataSource={editableData} rowKey="grade" scroll={{ y: 400 }} />
        </div>
    );
}

function AddGradingPolicy() {
    const [grade, setGrade] = useState('');
    const [GPA, setGPA] = useState('');
    const [range, setRange] = useState('');
    const [data, setData] = useState(initialGradePolicy);

    const handleAdd = () => {
        const newKey = data.length ? data[data.length - 1].key + 1 : '1';
        const newData = {
            key: newKey,
            grade,
            GPA: parseFloat(GPA),
            range,
        };
        setData([...data, newData]);
        setGrade('');
        setGPA('');
        setRange('');
    };

    return (
        <div className="w-[98%] md:w-[50%] mx-auto">
            <div className="my-4">
                <Input
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
            </div>
            <div className="my-4">
                <Input
                    placeholder="GPA"
                    value={GPA}
                    onChange={(e) => setGPA(e.target.value)}
                />
            </div>
            <div className="my-4">
                <Input
                    placeholder="Range"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                />
            </div>
            <Button type="primary" onClick={handleAdd}>
                Add Grading Policy
            </Button>
            <Table columns={columns} dataSource={data} rowKey="key" scroll={{ y: 400 }} />
        </div>
    );
}

