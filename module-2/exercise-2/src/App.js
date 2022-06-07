import {v4 as uuidv4} from 'uuid';

function App() {
    return (
        <div className="App">
            <h1>UUID v4 Generator</h1>
            {uuidv4()}
        </div>
    );
}

export default App;
