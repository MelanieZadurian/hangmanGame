// This is my wordGuess.js file for my hangman game
// Here we will use createslice to make functionality for the hangman game

// Import createSlice from the redux toolkit
// Also import words, which is my list of words that I'm using. 
// It's not every word, but it's a good range and enough for this game
import { createSlice } from "@reduxjs/toolkit"
import words from '../Components/Words'

// We will create wordGuess using createSlice
export const wordGuess = createSlice({
    // set name to 'word'
    name: 'word',

    // set the initial state
    // newWord will be what holds our chosen word
    // count is for how many guesses we've used
    // and result holds whether or not you've won the game
    initialState: {
        'newWord': '',
        'count': 0,
        'result': '',
    },

    // Now lets make reducers
    reducers: {

        // getNewWord will pull a random word from our list, and that's the chosen word for that particular game
        // it puts it to upper case as well, then updates the state
        getNewWord: (state) => {
            let newWord = words[Math.floor(Math.random() * words.length)];
            newWord = newWord.trim().toUpperCase()
            state.newWord = newWord
        },

        // increaseCount is what we used to add to the number of guesses
        // it simply updates the state by adding one
        increaseCount: (state) => {
            state.count += 1
        },

        // The task said that players needed to be able to start a new game
        // so initialiseCount sets the counter back to zero
        // so that you can start a new game
        initialiseCount: (state) => {
            state.count = 0
        },

        // setResult is what will allow us to tell players whether they have won or lost
        // we will show the player a different message depending on if they win or lose
        setResult: (state, action) => {
            switch (action.payload) {
                case 0:
                    state.result = `Too Bad. You've lost. The word was: ${state.newWord}`
                    break;
                case 1:
                    state.result = 'Congratulations! You won the game!'
                    break;
                default:
                    state.result = ''
                    break;
            }
        },
    },
})

// Then we export all the actions
export const { getNewWord, increaseCount, initialiseCount, setResult } = wordGuess.actions

// And finally export wordGuess
export default wordGuess.reducer