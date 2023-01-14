import React from 'react';
// import './Header.css';

const Header = () => {
  return (
 
<nav className="navbar header_ navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="navbar-header">
    {/* logo */}
    <a className="navbar-brand" href="/">
      <img src="/images/Full-Color.png" alt="Logo"  className="d-inline-block align-text-top header-logo"/>
    </a>

    </div>

    {/* nav content */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>

            {/* acordion button */}
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>


  );
};

export default Header;
