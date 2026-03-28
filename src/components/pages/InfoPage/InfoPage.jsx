import Footer from "../../objects/Footer"
import './InfoPage.scss';
import '../HomePage/styles/squareblock.scss';

export default function InfoPage() {

    return(
        <>
        <div className="page">
            <h1>Informations</h1>
            <div className="info">
                <div className="side-to-side">
                    <h2 style={{borderTopLeftRadius: '20px'}}>About This Website</h2>
                    <p>
                        This website was created as a space for exploring the beauty, meaning, and science behind flowers.
                        It combines botanical knowledge with artistic inspiration, offering visitors a place to both learn and feel connected to nature.
                        <br/>
                        The goal is simple — to make the world of flowers accessible, calming, and meaningful for everyone.
                    </p>
                </div>
                <div className="side-to-side" style={{flexDirection:"column"}}>
                    <h2 className="second">Credits</h2>
                    <p>
                        <b>Images: </b>
                        license CC0
                        {/* <ul>
                            <li>
                            https://pxhere.com/pl/photo/1629769<br/>
                            </li>
                            <li>
                            https://pixnio.com/pl/krajobrazy/ogrod-park/roz-kwiat-roslin-platek-ogrod-dom-gory-krajobraz<br/>
                            </li>
                            <li>
                            https://pxhere.com/pl/photo/556435<br/>
                            </li>
                            <li>
                            https://www.pexels.com/pl-pl/zdjecie/zdrowy-warzywa-rynek-swiezy-7475565/<br/>
                            </li>
                        </ul> */}
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}