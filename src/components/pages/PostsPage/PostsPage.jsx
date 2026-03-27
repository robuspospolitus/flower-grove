import "./styles/postspage.scss";
import Footer from "../../objects/Footer";
import {useState} from 'react';

export default function PostsPage() {
    const [activeOptions, setActiveOptions] = useState([]);
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
            <div className="posts-block"/>
            <div className="posts-carousel">
                {
                    examplePostStructure.map((each, key) => (
                    <div className='blue' key={key}>
                        <h3 className="post-header">{each.title} </h3>
                        {each.description} 
                        <button>Show more!</button>
                    </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

const examplePostStructure = [
    {
        title: "Mega post",
        description: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
        content: ":>"
    },
    {
        title: "First",
        description: 'dos', 
        content: "m"
    },
    {
        title: "First",
        description: 'tres',  
        content: "m"
    },
    {
        title: "First",
        description: 'quatro',  
        content: "m"
    },
    {
        title: "First",
        description: 'cinco',  
        content: "m"
    },
    {
        title: "First",
        description: 'ehh', 
        content: "m"
    },
    {
        title: "First",
        description: 'lol', 
        content: "m"
    }
]