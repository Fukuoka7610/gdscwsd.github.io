import './Layout.css'

import NavigationBar from '../NavigationBar/NavigationBar'
import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    )
}

export default Layout