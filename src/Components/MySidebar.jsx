import { React, useEffect, useState } from 'react'
import { fontSizes } from '../styles';
import MyNavbar from './MyNavbar';
import { useNavigate } from 'react-router-dom';
import { AdminMenuItems } from '../Constants/index';
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

export default function MySidebar() {
    const navigate = useNavigate()
    const onAdminMenuItemsClick = (e) => {
        console.log('click', e);
        if (e.key === '2') {
            navigate('/admin/add-student')
        }
        if (e.key === '3') {
            navigate('/admin/add-teacher')
        }
        if (e.key === '4') {
            navigate('/admin/add-parent')
        }
        if (e.key === '6') {
            navigate('/admin/add-remove-update-course')
        }
        if (e.key === '7') {
            navigate('/admin/offer-course')
        }
        if (e.key === '8') {
            navigate('/admin/register-course')
        }
        if (e.key === '9') {
            navigate('/admin/course-requests')
        }
    }
    const user = useSelector((state) => state.user)
    console.log(user)
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            setCollapsed(true)
        }
    }, [window.innerWidth])

    return (
        <div className="rounded-md w-full h-full">
            {/* <div className={`flex items-center md:order-2 bg-white text-2xl h-[15h] w-fit`}>


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

        
            </div> */}
            <div

                style={{
                    borderRadius: '5px',
                    overflow: 'hidden',
                    height: '100%',
                    // overflowY: 'auto',
                    width: '100%',
                    // width: 400,
                    backgroundColor: 'white',
                }}
            >   


                {window.innerWidth < 768 &&
                    <div className="w-full flex items-center justify-center">
                        <Button
                            type="default"
                            onClick={toggleCollapsed}
                            style={{
                                marginBottom: 8,
                                marginTop: 16
                            }}
                        >
                            
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                    </div>
                }
                <Menu
                    className='h-full overflow-y-auto p-2'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"

                    onClick={onAdminMenuItemsClick}
                    // theme="dark"
                    inlineCollapsed={collapsed}
                    items={AdminMenuItems}
                />
            </div>
        </div>
    )
}
