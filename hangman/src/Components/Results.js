// This is my Results component, which will show the user whether they've won or lost

// We need to import useSelector from react-redux
import { useSelector } from "react-redux";

// We simply get the result from state, and then return a div that contains the result
// This will mean a little result message gets shown to the user
const Results = () => {
    const result = useSelector((state) => state.word.result);

    return <div className="results-container">
        <p>Result: {result}</p>
    </div>;
};

// export Results
export default Results;