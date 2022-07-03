import React, { Component } from 'react'

export class Navbar extends Component {

  render() {

    const handleSelection = (e) => {
      this.props.changeCatagory(e.target.textContent) ; 
    }

    return (
      <div className='Navbar'>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">News Monkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href='#'>About us</a>
                    </li>
                </ul>
                

                <div  style={{ display : 'flex' , marginRight : '80px' }}>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Catagory
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a className="dropdown-item" href="#"  onClick={handleSelection} >sports</a></li>
                          <li><a className="dropdown-item" href="#"  onClick={handleSelection} >business</a></li>
                          <li><a className="dropdown-item" href="#"  onClick={handleSelection} >health</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>



                  <div className="collapse navbar-collapse mx-0" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Country 
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">India</a></li>
                          <li><a className="dropdown-item" href="#">USA</a></li>
                          <li><a className="dropdown-item" href="#">Russia</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  </div>

                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar