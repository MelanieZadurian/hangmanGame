// This is my body component for my hangman game
// This is the main part of my game, that contains a lot of the other components


// We need to import useSelector, useDispatch, and useState
// We also need to import my reducer actions from my wordGuess file
// And we need to import my Letters, HangImage, and Results components
import { useSelector, useDispatch } from "react-redux";
import { getNewWord, increaseCount, initialiseCount, setResult } from "../store/wordGuess";
import { useState } from 'react';
import Letters from "./Letters";
import HangImage from "./HangImage";
import Results from './Results'

// Create Body
const Body = () => {

    // Create word. Use useSelector to store the current chosen word as 'word'
    const word = useSelector((state) => state.word.newWord);

    // Here we need to use useState to store correct answers
    const [correctAns, setCorrectAns] = useState([])

    // We need to set dispatch to useDispatch()
    const dispatch = useDispatch();

    // Create function startGame
    // This starts the game off, so it sets the guesses counter to 0,
    // generates a new word from the list of random words to be the chosen word for this game,
    // empties the correct answer array,
    // and resets the result to blank
    // It also gets all the Letters buttons and then sets them to be enabled, rather than disabled
    const startGame = () => {
        dispatch(initialiseCount())
        dispatch(getNewWord())
        setCorrectAns([])
        dispatch(setResult(''))

        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = false
            btn.className = 'button'
        })
    }

    // Create function evaluateResponse.
    // This is for when you press a button on the onscreen keyboard
    // It checks if it's a correct guess (in which case it gets added to the correctAns array)
    // Or if it's wrong (in which case we increase the counter, which changes the hangman drawing)
    const evaluateResponse = (alphabet) => {
        let btn = document.getElementById(alphabet)
        if (word.includes(alphabet)) {
            btn.className = "button-green"
            setCorrectAns([...correctAns, alphabet])        
        }
        else {
            btn.className = "button-red"
            dispatch(increaseCount())                       
        }
    }

    // Create function disableButtons
    // This disables the buttons at the end, when the player gets their result
    const disableButtons = () => {
        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = true
            btn.className = 'button-grey'
        })
    }

    // This creates an array containing all of the alphabet letters
    // We need these for our on screen keyboard, so that we can make a button for each letter
    let alphabets = []
    for (let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i)
        alphabets.push(char)
    }

    // Create guessWord, which is our chosen word, but written as _ _ _ _ _ _ instead
    const guessWord = word.split('').map(char => correctAns.includes(char) ? char : '_').join(" ")

    // Check if the word doesn't have any _ left, in which case the player wins!
    // Then we set the result, and disable the buttons
    if ((!(guessWord.includes("_"))) && (word !== '')) {
        dispatch(setResult(1))                                 
        disableButtons()
    }


    // This is what our body returns:
    // A div that contains the results, images, new game button, and our Letters keyboard
    return <div >
        {word && <Results />}
        {word && <div className='state-container'>
            <HangImage disableButtons={disableButtons} />
            <p className='state-dash'>{guessWord}</p>
        </div>}
        <button className='btn' onClick={startGame}>New Game</button>
        {word && <div className='alpha-container'>
            {alphabets.map((alphabet, index) =>
                <Letters key={index} alphabet={alphabet} evaluateResponse={evaluateResponse} />
            )}
        </div>}
    </div>;
};

// export Body
export default Body;