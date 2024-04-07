import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';
import { HiBookOpen, HiBookmark, HiBookmarkAlt, HiFingerPrint, HiLogin, HiLogout, HiOutlineBookOpen } from 'react-icons/hi';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';



function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const StudentMenuItems = [
    getItem('Courses', './course', <HiOutlineBookOpen />),
    getItem('Transcript', './transcript', <HiBookmark />),
    getItem('Running Transcript', 'running-trancript', <HiBookmarkAlt />),
    getItem('Change Password', './change-password', <HiFingerPrint />),
    getItem('Profile', './profile', <HiFingerPrint />),
    getItem('Logout', '/', <HiLogout />)
];

export const TeacherMenuItem = [
    getItem('Courses', './course', <HiOutlineBookOpen />),
    getItem('Profile', './profile', <CgProfile />),
    getItem('Change Password', './change-password', <HiFingerPrint />),
    getItem('Logout', '/', <HiLogout />)
]

export const AdminMenuItems = [


    getItem('Users', 'sub1', <PieChartOutlined />,
        [
            getItem('Add Student', './add-student'),
            getItem('Add Teacher', './add-teacher'),
            getItem('View All Students', './view-students'),
            getItem('View All Faculty', './view-teachers'),
        ]
    ),
    getItem('Courses', './course', <HiOutlineBookOpen />),

    getItem('Course Requests', './course-request', <ContainerOutlined />),
    getItem('Grade Policy', './grading', <PieChartOutlined />),
    getItem('Department', './department', <DesktopOutlined />),
    getItem('session', './session', <ContainerOutlined />),
    getItem('batch', './batch', <PieChartOutlined />),
    getItem('campus', './campus', <DesktopOutlined />),
    getItem('Profile', './profile', <HiFingerPrint />),
    getItem('Logout', '/', <HiLogout />)

];

