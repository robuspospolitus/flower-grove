import "../../styles/styles/footer.scss";
import { Link } from 'react-router-dom';
import ModalWindow from "./ModalWindow";
import { useState } from "react";

function Footer()  {
    const [modal, setModal] = useState(0);
    return (
        <div className="footer">
            <div className="up">
                <Link className='link' to="/">Homepage</Link>
                <div className="separator"/>
                <div className="link" onClick={() => setModal(1)}>Terms and conditions</div>
                <div className="separator"/>
                <div className="link" onClick={() => setModal(2)}>Privacy policy</div>
            </div>
            <div className="down">
                <p>&copy;Copyright 2024 by Nadia Gill. All Rights Reserved.</p>
            </div>
            {modal != 0 && 
                <ModalWindow type="home" close={setModal} data={data[modal-1]}/>
            }
        </div>
    );
}

export default Footer;

const data = [
    {
        id: 1,
        title: "Terms and conditions",
        date: "28-03-2026",
        author: "",
        content: [
            "1. Introduction",
            "Welcome to this website. By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with these Terms, please do not use the website.",

            "2. Purpose of the Website",
            "This website is created for portfolio and demonstration purposes only. It is intended to showcase UI/UX design and development skills. No commercial services or products are offered through this website.",

            "3. Newsletter Subscription",
            "Users may have the option to subscribe to a newsletter by providing their email address.",
            "By submitting your email:",
            "- You agree to receive occasional emails related to updates or demonstration content.",
            "- You confirm that the information provided is accurate.",
            "Important:",
            "The newsletter functionality may be simulated or non-commercial. Emails may not be regularly sent.",
            "You can unsubscribe at any time by contacting the website owner or using an unsubscribe option if available.",

            "4. Data Protection and Privacy",
            "The website owner respects your privacy and aims to comply with applicable data protection laws, including the General Data Protection Regulation (GDPR).",
            "- Personal data (such as email addresses) is collected only for the purpose of the newsletter feature.",
            "- Data is not sold, shared, or used for marketing beyond the scope described.",
            "- Data is stored only as long as necessary for demonstration purposes.",
            "As this is a portfolio/demo website, some data handling features may be limited or simulated.",

            "5. Intellectual Property",
            "All content on this website, including but not limited to design, layout, graphics, and text, is the property of the website owner unless otherwise stated.",
            "You may not copy, reproduce, or distribute any content without prior written permission.",

            "6. Disclaimer",
            "This website is provided on an 'as is' basis.",
            "The owner makes no warranties regarding:",
            "- accuracy or completeness of content,",
            "- availability of the website,",
            "- absence of errors or bugs.",

            "7. Limitation of Liability",
            "To the fullest extent permitted by law, the website owner shall not be liable for any damages arising from the use or inability to use this website.",

            "8. External Links",
            "This website may contain links to third-party websites. The owner has no control over and assumes no responsibility for their content or practices.",

            "9. Changes to Terms",
            "These Terms and Conditions may be updated at any time without prior notice. Continued use of the website constitutes acceptance of the updated Terms.",

            "10. Contact",
            "For any questions regarding these Terms, you may contact the website owner via the contact information provided on the website."
        ]
    },
    {
        id: 2,
        title: "Privacy Policy",
        date: "28-03-2026",
        author: "",
        content: [
            "1. Introduction",
            "This Privacy Policy explains how we collect, use, and protect your personal data when you use this website.",
            "By accessing or using this website, you consent to the practices described in this Privacy Policy.",

            "2. Personal Data Collection",
            "We may collect personal data such as your email address when you subscribe to our newsletter.",
            "This data is collected only for the purpose of sending demonstration updates or portfolio-related content.",

            "3. Use of Personal Data",
            "Collected data is used solely to provide the newsletter service and demonstrate website functionality.",
            "We do not sell, rent, or share your personal data for marketing purposes.",

            "4. Data Storage and Security",
            "We implement reasonable measures to protect personal data from unauthorized access or disclosure.",
            "Data is stored only as long as necessary for demonstration purposes or until you request deletion.",

            "5. User Rights",
            "You have the right to access, correct, or request deletion of your personal data.",
            "You can exercise these rights by contacting the website owner via the contact information provided on the website.",

            "6. Newsletter Consent",
            "By subscribing to the newsletter, you consent to the collection and processing of your email address for this purpose.",
            "You can unsubscribe at any time by using the unsubscribe link or contacting the website owner.",

            "7. Third-Party Services",
            "This website may use third-party services for newsletter delivery or analytics.",
            "We are not responsible for the privacy practices of these third parties.",

            "8. Cookies",
            "This website does not use cookies.",

            "9. Changes to Privacy Policy",
            "We may update this Privacy Policy at any time without prior notice.",
            "Continued use of the website after changes indicates acceptance of the updated policy.",

            "10. Contact",
            "For questions about this Privacy Policy or your personal data, you may contact the website owner using email: nadia.gill2006@gmail.com"
        ]
    },
]