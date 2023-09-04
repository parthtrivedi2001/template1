// Importing React File
import React from 'react';
// Importing CSS File
import './index.css';
// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing Cards By Row
import { RowLayout, RowLayout2 } from './Row';
// Importing Navbar Component
import NavbarComp from './Navbar';
// Importing Footer Component
import FooterComp from './Footer';
// Importing Slider
import ImageHead from './ImageHead';


function App() {
    return (
        <>
            {/* Navbar Component */}
            <NavbarComp />,
            {/* Slider Component */}
                <ImageHead />,
        {/* Cards Row 1 Component */}
                <RowLayout />,
        {/* Cards Row 1 Component */}
            <RowLayout2 />,
            {/* Footer Component */}
            <FooterComp />
            </>
    );
}
export default App;