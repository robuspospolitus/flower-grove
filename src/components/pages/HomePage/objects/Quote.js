import { useState } from 'react';
import '../../../../styles/styles/quotes.scss'

const quotes = [
    {
        author: "Paracelsus",
        text: "All things are poisons, for there is nothing without poisonous qualities. It is only the dose which makes a thing poison.",
    },
    {
        author: "Paracelsus",
        text: "Know that the philosopher has power over the stars, and not the stars over him.",
    },
    {
        author: "Paracelsus",
        text: "There is in each person, in every animal, bird and plant a star which mirrors, matches or is in some sense the same as a star in the heavens.",
    }
]

export default function Quote() {
    const randomObject = quotes[Math.floor(Math.random() * quotes.length)];
    
    return(
        <div className='quote-wrapper'>
            <div style={{width: "70%", margin: "auto"}}>{randomObject.text}</div>
            <div style={{height: "10px"}}/>
            ~{randomObject.author}
        </div>
    );
}