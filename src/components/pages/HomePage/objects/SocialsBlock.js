import {useState} from "react";
import "../../../../styles/styles/socialsblock.scss";
import SocialSlide from "./SocialSlide";
import GithubLogo from "../../../../socials-logos/github.svg"
import XLogo from "../../../../socials-logos/X.svg"
import InstagramLogo from "../../../../socials-logos/instagram.svg"
import LinkedinLogo from "../../../../socials-logos/linkedin.svg"

const SocialsBlock = () => {
    return (
        <div className="socialsblock">
            <div className="socials-wrapper">
                <div className="inside">
                    <h2>SOCIALS</h2>
                    <div className='separator'/>
                    <div className="socials">
                        <SocialSlide socialname={"X"} image={XLogo} page={"https://x.com/robuspospolitus"}/>
                        <SocialSlide socialname={"Instagram"} image={InstagramLogo} page={"https://www.instagram.com/nadia.gill_/"}/>
                        <SocialSlide socialname={"Linkedin"} image={LinkedinLogo} page={"/"}/>
                        <SocialSlide socialname={"Github"} image={GithubLogo} page={"https://github.com/robuspospolitus"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialsBlock;