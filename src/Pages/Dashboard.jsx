import React, { useEffect } from 'react'
import Sidebar from '../Components/MySidebar'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../Components/MyNavbar'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { AdminMenuItems } from '../Constants';
import { HiAcademicCap } from 'react-icons/hi';
import logo from '../assets/logo-pucit.png'
import { Avatar, Dropdown } from 'flowbite-react';
import { fontSizes } from '../styles';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }),
);

export default function Dashboard() {
    const [collapsed, setCollapsed] = React.useState(false);
    const style = { overflow: 'auto', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }


    return (
        <Layout>
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                theme='light'
                style={style}
                className='min-h-screen py-5'
                width={230}
                // trigger={<HiAcademicCap />}
                zeroWidthTriggerStyle={{ top: '100px', left: '0px', position: 'fixed' }}
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                    setCollapsed(!collapsed);
                }}
            >
                <div className='flex justify-center items-center my-4'>
                    <img src={logo} className="mr-2 w-[20%]" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PUCIT-CMS</span>
                </div>
                <div className="flex items-center justify-center">
                    <div className='flex items-center w-full justify-center'>
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        <p className={`${fontSizes.small} font-medium ml-4`}>Bonnie Green</p>
                    </div>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={AdminMenuItems} />

            </Sider>
            <Layout>
                <Content
                >
                    <div className={collapsed ? 'hidden' : 'block'}>
                        {/* <MyNavbar /> */}
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
        // <div className=''>
        //     <div className='sticky top-0'>
        //         <MyNavbar />
        //     </div>
        //     <div className='flex relative h-[85vh]'>
        //         <div className="w-[25%] h-full overflow-y-auto overflow-x-hidden left-0">
        //             <Sidebar />
        //         </div>
        //         <div className='overflow-y-auto overflow-x-hidden'>

        //             <Outlet />
        //         </div>
        //     </div>
        // </div>
    )
}
