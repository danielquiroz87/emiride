import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    // <nav className="header_ navbar ">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href="/">
    //         <img src="/images/Full-Color.png"  alt="Logo" width="150" height="51.7" class="d-inline-block align-text-top"/>
    //         </a>
    //     </div>
    // </nav>

    
    // <header className="header">
    //   <h1 className="header__text">Welcome to my website!</h1>
    // </header>

    <nav class="navbar header_ navbar-expand-lg navbar-light bg-light">
         {/* logo */}
         <div className="container-fluid">
             <a className="navbar-brand" href="/">
             <img src="/images/Full-Color.png"  alt="Logo" width="150" height="51.7" class="d-inline-block align-text-top"/>
             </a>
         </div>

        {/* acordion button */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        {/* nav content */}
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;
