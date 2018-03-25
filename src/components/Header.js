import React, { Component } from 'react';

class Header extends Component
{
  render()
  {
    return(
      <header>
    	 React Example: Football Score working with  
        <span className="text-danger"> Components</span>,
        <span className="text-success"> States</span>,
        <span className="text-info"> Properties</span> 
     </header>
    );
  }
}

export default Header;