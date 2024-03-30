import React, { useEffect } from 'react'
import Sidebar from '../Components/MySidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import MyNavbar from '../Components/MyNavbar'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { AdminMenuItems } from '../Constants';
import { HiAcademicCap, HiMenuAlt1 } from 'react-icons/hi';
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

    const navigate = useNavigate();


    const [collapsed, setCollapsed] = React.useState(false);
    const style = { overflow: 'auto', height: '100vh', position: 'sticky', zIndex:9999, left: 0, top: 0, bottom: 0 }

    const onMenuItemsClick = (item) => {

        if (item.key === '/') {

            // remove user from local storage

        }
        navigate(item.key)
    }
    return (
        <Layout>
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                theme='light'
                style={style}
                className='min-h-screen py-5 shadow-lg border-r dark:bg-gray-800 dark:text-white'
                width={230}
                trigger={<HiMenuAlt1 />}
                zeroWidthTriggerStyle={{ boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)', zIndex: 9999, position: 'fixed', top: 20, right: 10, border: '1px solid grey', backgroundColor: 'white', padding: '10px', borderRadius: '50%' }}
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
                <Menu theme="light" mode="inline" onClick={onMenuItemsClick} items={AdminMenuItems} />

            </Sider>
            <Layout>
                <Content
                    className=''
                >
                    <div className={collapsed ? 'hidden' : 'block'}>
                        <div className="bg-white shadow-sm w-full flex py-4 items-center justify-between px-4">
                            <div className='flex items-center justify-start mx-4'>
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                <p className={`${fontSizes.small} font-medium ml-4`}>Bonnie Green
                                    <small className={`font-normal block ${fontSizes.xSmall}`}>Admin</small>
                                </p>
                            </div>
                            <div className='w-fit'>
                                {Date().split(' ').slice(0, 4).join(' ')}
                            </div>
                        </div>

                        {/* <MyNavbar /> */}
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    className={`${fontSizes.xSmall} font-light text-center`}
                >
                    PUCIT CMS ©{new Date().getFullYear()} Created by PUCIT Students
                </Footer>
            </Layout>
        </Layout>
    )
}
