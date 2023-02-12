// This is the file for my hangImage component
// It shows the little image of the hangman, that gets progressively more 'hung' as the game goes on

// We need to import useSelector and useDispatch from react-redux
// We also need to import setResult from my wordGuess file
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../store/wordGuess";

// These are the images that were provided in the task
// We need to import them one by one so that we can use them
// So that it will update in reference to how many wrong guesses a player has made
import state1 from '../Images/state1.GIF'
import state2 from '../Images/state2.GIF'
import state3 from '../Images/state3.GIF'
import state4 from '../Images/state4.GIF'
import state5 from '../Images/state5.GIF'
import state6 from '../Images/state6.GIF'
import state7 from '../Images/state7.GIF'
import state8 from '../Images/state8.GIF'
import state9 from '../Images/state9.GIF'
import state10 from '../Images/state10.gif'
import state11 from '../Images/state11.GIF'

// now create HangImage
const HangImage = ({ disableButtons }) => {

    // we need to get count from the state, because this stores the number of incorrect guesses
    const count = useSelector((state) => state.word.count)
    const dispatch = useDispatch()

    //This gets the image by its id 
    let img = document.getElementById('state-img')

    // here we want the image to fit with how many bad guesses you've done
    // so we will use switch to do that
    // if they get all the way to state11 then that means they've lost so we need to use setResult
    if (img) {
        switch (count) {
            case 0:
                img.src = state1
                break;
            case 1:
                img.src = state2
                break;
            case 2:
                img.src = state3
                break;
            case 3:
                img.src = state4
                break;
            case 4:
                img.src = state5
                break;
            case 5:
                img.src = state6
                break;
            case 6:
                img.src = state7
                break;
            case 7:
                img.src = state8
                break;
            case 8:
                img.src = state9
                break;
            case 9:
                img.src = state10
                break;
            case 10:
                img.src = state11
                dispatch(setResult(0))          
                disableButtons()                
                break;
            default:
                img.src = state1
                break;
        }
    }

    // This returns the image, with the src changing depending on what stage in the game you're at
    return <div>
        <img className='state-img' id='state-img' src={state1} />
    </div>;
};

// export HangImage
export default HangImage;