import {PieChartOutlined, DesktopOutlined, ContainerOutlined} from '@ant-design/icons';
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
            getItem('Add Student', '2'),
            getItem('Add Teacher', '3'),
            getItem('Add Parent', '4'),
        ]
    ),
    getItem('Courses','sub2' , <DesktopOutlined />,
        [
            getItem('Add/Remove/Update Course', '6'),
            getItem('Offer Course', '7'),
            getItem('Register Course', '8'),
        ]
    ),
   
    getItem('Course Requests', 9, <ContainerOutlined />)
     
];

