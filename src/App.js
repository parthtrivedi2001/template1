// Importing React File
import React from 'react';
// Importing CSS File
import './index.css';
// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import Calculator from './Calculator';

function App() {
    return (
        <>
            <div className="App">
                {/* Counter Component */}
                <Counter />
                {/* Calculator Component */}
                <Calculator />
            </div>
        </>
    );
}
export default App;