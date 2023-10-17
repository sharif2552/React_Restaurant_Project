// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import MediaCard from '../General/card';

function Navigation() {
  return (
    <>
   <MediaCard foodName={"Apple"} description={"This is apple"}/>
   <br />
   <MediaCard foodName={"Jilapi"} description={"This jilapi"} />
        <nav>
      <ul>
       This is the homepage
      </ul>

    </nav>
    </>

  ); 
}


export default Navigation;
