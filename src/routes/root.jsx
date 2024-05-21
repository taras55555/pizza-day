import { useState, useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { UserNameContext } from '../contexts/UserName.jsx';

function Root() {
    return (
        <div className='wrapper'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Root;