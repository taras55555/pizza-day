import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div className='wrapper'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Root;