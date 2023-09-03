import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RowLayout, RowLayout2} from './Row'
import NavbarComp from './Navbar';
import FooterComp from './Footer'
import ImageHead from './ImageHead';

ReactDOM.render(

  <>
    <NavbarComp />
    <ImageHead />
    <RowLayout />
    <RowLayout2 />
    {/* <RowLayout3 />
    <RowLayout4 /> */}
    <FooterComp />
  </>


  , document.getElementById('root'));