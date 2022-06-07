import FuncTimer from "./FuncTimer";
import ClassTimer from "./ClassTimer";

const styles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around'
}

function App() {
    return (
        <div style={styles} className="App">
            <FuncTimer/>
            <ClassTimer/>
        </div>
    );
}

export default App;
