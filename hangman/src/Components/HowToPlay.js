// This is my HowToPlay component
// It tells the player how to play my hangman game
// And can be summoned/dismissed by a button

const HowToPlay = () => {
    return <div>
        <h4>How to Play:</h4>
        <div className="rules-list">
            <ol>
                <li>To start, click: 'New Game'.</li>
                <li>A random word will be chosen for you, and you have to guess it correctly!</li>
                <li>You have 10 guesses. To make a guess, click a letter on the on-screen keyboard</li>
                <li>If that letter is in the word, you'll be shown its position in the word.</li>
                <li>If that letter isn't in the word, then it'll go red and you'll lose a life</li>
                <li>If you don't correctly guess the word before the hangman image completes, you lose!</li>
                <li>If you correctly guess the word, you win!</li>
            </ol>
        </div>
    </div>;
};

export default HowToPlay;