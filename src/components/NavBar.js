import React from 'react';


class NavBar extends React.Component{


    render(){

        return(
     <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

        )
    }
}



export default NavBar;