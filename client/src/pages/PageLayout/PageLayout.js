import { Outlet, Link } from 'react-router-dom';

export default function PageLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </nav>

            <Outlet />

            
        </div>
    )
};