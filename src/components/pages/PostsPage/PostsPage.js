import "./styles/postspage.scss";
import {useState} from 'react';

export default function PostsPage() {
    const [allActiveOptions, setAllActiveOptions] = useState(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'dos', 'tres', 'quatro', 'cinco']);
    return(
        <div className="posts-page">
            <div className="header">
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text covered-text">POSTS</p>
            </div>
            <div className="posts-block"></div>
            <div className="posts-carousel">
                { 
                    allActiveOptions.map((each, key) => (
                    <div className='blue' key={key} >
                        {each} 
                        <div style={{color: "#ff5454", marginLeft: "5px", lineHeight: "18px", cursor: "pointer"}}>x</div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}