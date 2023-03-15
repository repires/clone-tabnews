function calculate(number1, number2, operator) {
    return number1 * number2;
}

function ShowButtons({ setResult, number1, number2 }) {
    return <>
        <div className="col-1 d-grid  gap-2">
            <MyButton onClick={() => setResult(calculate(number1, number2, '*'))}><b>*</b></MyButton>
            <MyButton onClick={() => setResult(calculate(number1, number2, '/'))}><b>/</b></MyButton>
        </div>
        <div className="col-1 d-grid  gap-2">
            <MyButton onClick={() => setResult(calculate(number1, number2, '+'))}><b>+</b></MyButton>
            <MyButton onClick={() => setResult(calculate(number1, number2, '-'))}><b>-</b></MyButton>
        </div>
    </>;
}

function MyButton({ onClick, children }) {
    return <>
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    </>;
}

function MyInput({ number, setNumber, readonly }) {
    return <>
        <div className="col">
            <input type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)}
                readOnly={readonly} />
        </div>
    </>;
}

function MyCalc() {
    // Creates a number state object and initializes it with 0. 
    // setNumber is a method we can use to change the current state value
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    return <>
        <MyInput number={number1} setNumber={setNumber1} />
        <MyInput number={number2} setNumber={setNumber2} />
        <ShowButtons setResult={setResult} number1={number1} number2={number2} />
        <MyInput number={result} readonly={true} />
    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<MyCalc />); // Render the React component 
