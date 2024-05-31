import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { HiMenuAlt1 } from 'react-icons/hi';
import logo from '../assets/logo-pucit.png'
import { Avatar } from 'flowbite-react';
import { fontSizes } from '../styles';
import MySpinner from '../Components/MySpinner';
import { removeUser } from '../Redux/userSlice';

const { Content, Footer, Sider } = Layout;

export default function Dashboard(props) {
    const [details, setDetails] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('user'));
        if (!userData) {
            alert('Please login first');
            dispatch(removeUser());
            navigate('/');
        } else {
            const { FirstName, LastName } = userData.userData.user;
            const role = userData.userData.role;
            setDetails({ FirstName, LastName, role });
        }
    }, [navigate, dispatch]);

    const style = { overflow: 'auto', height: '100vh', position: 'sticky', zIndex: 9999, left: 0, top: 0, bottom: 0 };

    const onMenuItemsClick = async (item) => {
        if (item.key === '/') {
            await dispatch(removeUser());
        }
        navigate(item.key);
    };

    return (
        loading ? <MySpinner fullscreen={true} /> :
        (
            <Layout>
                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    theme='light'
                    style={style}
                    className='min-h-screen py-5 shadow-lg border-r dark:bg-gray-800 dark:text-white'
                    width={230}
                    trigger={<HiMenuAlt1 />}
                    zeroWidthTriggerStyle={{
                        boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)',
                        zIndex: 9999,
                        position: 'fixed',
                        top: 20,
                        right: 10,
                        border: '1px solid grey',
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '50%'
                    }}
                    onBreakpoint={(broken) => {
                        // Handle breakpoint
                    }}
                    onCollapse={(collapsed, type) => {
                        setCollapsed(collapsed);
                    }}
                >
                    <div className='flex justify-center items-center my-4'>
                        <img src={logo} className="mr-2 w-[20%]" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PUCIT-CMS</span>
                    </div>
                    <Menu theme="light" mode="inline" onClick={onMenuItemsClick} items={props.menuItem} />
                </Sider>
                <Layout>
                    <Content>
                        <div className={collapsed ? 'hidden' : 'block'}>
                            <div className="bg-white shadow-sm w-full flex py-4 items-center justify-between px-4">
                                <div className='flex items-center justify-start mx-4'>
                                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                    <p className={`${fontSizes.small} font-medium ml-4`}>
                                        {details ? `${details.FirstName} - ${details.LastName}` : ''}
                                        <small className={`font-normal block ${fontSizes.xSmall}`}>{details ? details.role : ''}</small>
                                    </p>
                                </div>
                                <div className='w-fit'>
                                    {Date().split(' ').slice(0, 4).join(' ')}
                                </div>
                            </div>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer className={`${fontSizes.xSmall} font-light text-center`}>
                        PUCIT CMS ©{new Date().getFullYear()} Created by PUCIT Students
                    </Footer>
                </Layout>
            </Layout>
        )
    );
}
