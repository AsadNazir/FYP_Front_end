import React from 'react'
import Sidebar from '../Components/MySidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/MyNavbar'

export default function Dashboard() {
    return (
        <div>
            {/* <Navbar /> */}
            <Sidebar />
            <Outlet />
        </div>
    )
}
