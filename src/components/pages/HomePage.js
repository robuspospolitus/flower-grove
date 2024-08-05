import Gallery from "../objects/Gallery";
import Quote from "../objects/Quote";
import PurposeBlock from '../objects/PurposeBlock'
import SquareBlock from "../objects/SquareBlock";
import Newsletter from "../objects/Newsletter";

export default function HomePage() {

    return(
        <>
            <Gallery/>
            <div style={{position: "relative"}}>
                <PurposeBlock/>
                <SquareBlock/>
            </div>
            <Quote />
            <Newsletter/>
            
        </>
    )
}