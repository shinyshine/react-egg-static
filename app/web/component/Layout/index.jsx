import React from 'react'
// import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import Header from 'component/newHeader/header'

function MainLayout({ children }) {
    return <div>
        <Header />
        <div className="main-container">
            {children}
        </div>
    </div>
}

export default MainLayout;
