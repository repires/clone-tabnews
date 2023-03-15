function calculate(operator) {
    alert(operator);
}

function ShowButtons() {
    return <>
        <div class="col-1 d-grid  gap-2">
            <MyButton onClick={() => calculate('*')}><b>*</b></MyButton>
            <MyButton onClick={() => calculate('/')}><b>/</b></MyButton>
        </div>
        <div class="col-1 d-grid  gap-2">
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

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<ShowButtons />); // Render the React component 
