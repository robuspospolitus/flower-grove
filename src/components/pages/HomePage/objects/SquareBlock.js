import '../../../../styles/styles/squareblock.scss';
import '../../../../styles/styles/breakpoints-squareblock.scss'
import {useInView} from "react-intersection-observer";

export default function SquareBlock() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
    return (
        <div className="squareblock-wrapper">
            <div className={`square ${inView ? "square-animation":""}`} ref={ref} >
                <p>{`LUNAR MEANING`}</p>
            </div>
            <div className="outside-square-text">
                <p>
                The phases of the moon have long been believed to 
                influence plant growth and behavior, a concept rooted 
                in both folklore and biodynamic gardening practices.
                Lunar rhythms, while not universally accepted by all 
                scientists, continue to guide many gardeners and farmers 
                who observe the subtle yet profound ways in which the
                moon's cycles appear to harmonize with the natural world.
                </p>
            </div>
        </div>
    )
}