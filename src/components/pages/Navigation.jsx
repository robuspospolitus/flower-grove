import { Outlet, Link } from 'react-router-dom';
import '../../styles/styles/navigation.scss';
const Navigation = () => {

    return(
        <>
            <nav className='navigation-bar'>
                <Link className='navigation-link' to="/">Home</Link>
                <div className='separator'/>
                <Link className='navigation-link' to="/posts">Posts</Link>
                <div className='separator'/>
                <Link className='navigation-link' to="/info">Info</Link>
                
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;