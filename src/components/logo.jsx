import React from "react";
import "../stylesheets/logo.css";
import checklist from "../images/checklist.png";

function Logo (){
    return (
    <div className='logo-tasklist-container'>
      <img className='tasklist-logo'
        src={checklist}
        alt="Tasklist logo"
    />
    </div>
    );
};

export default Logo;