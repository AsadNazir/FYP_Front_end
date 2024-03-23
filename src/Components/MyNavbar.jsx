import React from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import logo from '../assets/logo-pucit.png';
import { fontSizes } from '../styles';

export default function MyNavbar() {
    return (
        <div className='w-full'>
            <Navbar >
                <Navbar.Brand>
                    <img src={logo} className="mr-2 w-[30%]" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PUCIT</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <>
                                <p className={`${fontSizes.small} font-medium mr-5`}>Bonnie Green</p>
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
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
                    </Dropdown>
                    {/* <Navbar.Toggle /> */}
                </div>
                {/* <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}
