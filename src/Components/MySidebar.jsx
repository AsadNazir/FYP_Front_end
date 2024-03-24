import { React, useState } from 'react'
import { fontSizes } from '../styles';
import MyNavbar from './MyNavbar';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useSelector } from 'react-redux';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Courses', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Transcript', 'sub1', <MailOutlined />, [
        getItem('Overall Transcript', '5'),
        getItem('Running Transcript', '6'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
export default function MySidebar() {

    const user = useSelector((state) => state.user)
    console.log(user)
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="">
            <div className={`flex items-center md:order-2 px-4 bg-white text-2xl h-[15h]`}>


                <Button
                    className='mr-4'
                    // type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        // marginBottom: 16,
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <MyNavbar />
                {/* <Dropdown
    arrowIcon={false}
    inline
    label={
        <>

            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            <p className={`${fontSizes.small} font-medium ml-3`}>Bonnie Green</p>
        </>
    }
>
    <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
    </Dropdown.Header>
    <Dropdown.Item>Dashboard</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Earnings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Sign out</Dropdown.Item>
</Dropdown> */}
                {/* <Navbar.Toggle /> */}
            </div>
            <div

                style={{
                    overflow: 'auto',
                    width: 256,
                }}
            >

                {/* <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
                <Menu
                    className='h-[85vh] overflow-y-auto'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    // theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </div>
    )
}
