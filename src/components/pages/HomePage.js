import Gallery from "../objects/Gallery";
import Quote from "../objects/Quote";
import PurposeBlock from '../objects/PurposeBlock'
import SquareBlock from "../objects/SquareBlock";

export default function HomePage() {

    return(
        <>
            <Quote />
            <Gallery/>
            <div style={{position: "relative"}}>
                <PurposeBlock/>
                <SquareBlock/>
            </div>
            
        </>
    )
}