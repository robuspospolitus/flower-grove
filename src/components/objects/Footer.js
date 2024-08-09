import "../../styles/styles/footer.scss";
import { Outlet, Link } from 'react-router-dom';


function Footer()  {
    return (
        <div className="footer">
            <div className="up">
                <Link className='link' to="/">Homepage</Link>
                <div className="separator"/>
                <Link className='link' to="terms-and-conditions">Terms and Conditions</Link>
                <div className="separator"/>
                <Link className='link' to="privacy-policy">Privacy Policy</Link>
            </div>
            <div className="down">
                <p>&copy;Copyright 2024 by Nadia Gill. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;