import React from 'react'
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