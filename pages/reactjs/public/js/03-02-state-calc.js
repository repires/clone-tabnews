function calculate(operator) {
    alert(operator);
}

function ShowButtons() {
    return <>
        <div className="col-1 d-grid  gap-2">
            <MyButton onClick={() => calculate('*')}><b>*</b></MyButton>
            <MyButton onClick={() => calculate('/')}><b>/</b></MyButton>
        </div>
        <div className="col-1 d-grid  gap-2">
            <MyButton onClick={() => calculate('+')}><b>+</b></MyButton>
            <MyButton onClick={() => calculate('-')}><b>-</b></MyButton>
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

function MyInput({ readonly }) {
    // Creates a number state object and initializes it with 0. 
    // setNumber is a method we can use to change the current state value
    const [number, setNumber] = React.useState(0);

    return <>
        <div className="col">
            <input type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)}
                readOnly={readonly} />
        </div>
    </>;
}

function MyCalc() {
    return <>
        <MyInput readonly={false} />
        <MyInput />
        <ShowButtons />
        <MyInput readonly={true} />
    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<MyCalc />); // Render the React component 
