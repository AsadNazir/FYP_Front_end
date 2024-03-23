import { React, useState } from 'react'
import { HiChartPie, HiShoppingBag, HiInbox, HiUser, HiArrowSmRight, HiTable, HiLogout } from 'react-icons/hi';
import { Sidebar, Dropdown, Avatar, Navbar } from 'flowbite-react';
// import { Avatar } from 'flowbite-react/dist/Avatar';
import { fontSizes } from '../styles';
import logo from '../assets/logo-pucit.png';
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
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
export default function MySidebar() {
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
