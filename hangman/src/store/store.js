// This is my store.js file
// We need to import configure store and also the wordGuessReducer from our wordGuess file
import { configureStore } from "@reduxjs/toolkit";

import wordGuessReducer from './wordGuess';

export default configureStore({
    reducer: {
        word: wordGuessReducer,
    }
})