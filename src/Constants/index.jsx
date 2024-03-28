import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';
import { HiLogout } from 'react-icons/hi';
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


export const AdminMenuItems = [


    getItem('Add Users', 'sub1', <PieChartOutlined />,
        [
            getItem('Add Student', './add-student'),
            getItem('Add Teacher', './add-teacher'),
            getItem('View All Students', './view-students'),
        ]
    ),
    getItem('Courses', 'sub2', <DesktopOutlined />,
        [
            getItem('Add/Remove/Update Course', './course'),
            getItem('Offer Course', './offer-course'),
            getItem('Register Course', './register-course'),

        ]
    ),

    getItem('Course Requests','./course-request', <ContainerOutlined />),
    getItem('Logout', '/', <HiLogout />)

];

