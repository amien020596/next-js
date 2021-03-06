import React, { Component } from 'react';
import Header from '../shared/Header';

const BaseLayout = props => {
    const { className, children, isAuthenticated, user } = props;
    console.log("user baselayout", user)
    return (
        <div className="layout-container">
            <Header isAuthenticated={isAuthenticated} user={user} />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout;