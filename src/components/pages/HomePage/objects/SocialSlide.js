import {useInView} from "react-intersection-observer";
import "../../../../styles/styles/socialsblock.scss";

export default function SocialSlide({socialname="", image}) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
    return (
        
            <div className={`social ${inView ? "social-animation":""}`} ref={ref} >
                <img className="social-image" src={image} alt={socialname}/>
                <p className="social-name">{socialname}</p>

            </div>
       
    )
}