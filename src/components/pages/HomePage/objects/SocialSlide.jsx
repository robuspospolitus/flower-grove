import {useInView} from "react-intersection-observer";
import "../styles/socialsblock.scss";

export default function SocialSlide({socialname="", image, page="/"}) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
    
    return (
        <a href={page} target="blank" className={`social ${inView ? "social-animation":""}`} ref={ref} >
            <img className="social-image" src={image} alt={socialname}/>
            <p className="social-name">{socialname}</p>
        </a>
    )
}