// This is my header component for my hangman game
// It contains a title, and a button that will either show or hide the 'how to play' part of my game

// import useState from react, and also import my HowToPlay component
import { useState } from "react";
import HowToPlay from "./HowToPlay";

// Create Header
// we need to use useState to help us either hide or show the rules, so that a player can choose whether they need to see them or not
const Header = () => {

    const [showRules, setShowRules] = useState(true)

    const displayRules = () => {
        setShowRules(!showRules)
    }

    // return a div containing the header
    // and a short little intro paragraph
    // and the button to hide or show the rules
    return <div>
        <header className="header-container">
            <h1 id="mainHeader">My Hangman Game</h1>
            <p>A digital take on the classic game of 'hangman'!</p>
            <button className="btn" onClick={displayRules}>{showRules ? 'Hide Rules' : 'Help'}</button>
        </header>
        {showRules && <HowToPlay />}
    </div>

};

// export Header
export default Header;