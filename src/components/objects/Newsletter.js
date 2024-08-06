import { useState } from 'react';
import '../../styles/styles/newsletter.scss';

export default function Newsletter() {
    const [isFormOpen, setFormOpen] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const handleNewsletterFormOpen = () => {
        setFormOpen(!isFormOpen);
    }
    const handleNewsletterSubmit = () => {
        setFormOpen(false);
        setSubmitted(true);
    }
    return (
        <div className='newsletter-wrapper'>
            <h2>Need more herb tips?</h2>
            <p>Have them delivered straight to your mailbox!</p>
            { !isSubmitted && !isFormOpen &&
                <div className='button'>
                    <button className='unclicked' onClick={handleNewsletterFormOpen}>I WANT TIPS!</button>
                </div>
            }
            {isFormOpen &&
                <div className='newsletter-form'>
                    <form onSubmit={() => handleNewsletterSubmit()}>
                        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button className='submit-button' type='submit'>Count me in!</button>
                    </form>
                </div>
            }
            {isSubmitted && <h2>THANK YOU!</h2>}
        </div>
    );
}