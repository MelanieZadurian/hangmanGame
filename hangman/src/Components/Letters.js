// This is my Letters component
// It creates all the letters in the alphabet 
// Each letter has a button that calls the evaluateResponse function when it's clicked

const Letters = ({ alphabet, evaluateResponse }) => {

    return <div >

        <div className='icon'>

            <button className="button" id={alphabet} name='icon-button' onClick={() => evaluateResponse(alphabet)}>
                {alphabet}
            </button>

        </div>
    </div>;
};

// export Letters
export default Letters;