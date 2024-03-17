import React from 'react';

const Header = () => {
  return (
    <div>
       <header className="header">
        <h1>Where in the world?</h1>
        <div className="mode">
        <img src="../public/Toggle.svg" alt="Toggle Icon"></img>
        <p>Dark Mode</p>
        </div>
       </header>
    </div>
  );
}

export default Header;
