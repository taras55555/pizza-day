import { useState, useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { UserNameContext } from '../contexts/UserName.jsx';

function Root() {
    const UserName = useContext(UserNameContext);
    const [FullName, setFullName] = useState(UserName);
    return (
        <div className='wrapper'>
            <UserNameContext.Provider value={{FullName, setFullName}}>
                <Header />
                <Outlet />
            </UserNameContext.Provider>
        </div>
    )
}

export default Root;