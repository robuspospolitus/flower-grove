import { useState } from 'react';
import '../../styles/styles/newsletter.scss';

export default function Newsletter() {

    return (
        <div className='newsletter-wrapper'>
            <h2>Need more herb tips?</h2>
            <p>Have them delivered straight to your mailbox!</p>
            <button className='unclicked'>I WANT TIPS!</button>
        </div>
    );
}