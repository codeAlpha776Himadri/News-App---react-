import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {

    return (
      <div className='Navbar'>
        <nav className="navbar navbar-light navbar-expand-lg bg-light"  style={{fontFamily : 'serif' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"  style={{color : 'rgb(0, 39, 2)' , fontWeight : 'bold'}}>News Ultimate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/"  style={{color : 'black'}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/store"  style={{color : 'black'}}>Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/about'  style={{color : 'black'}}>About us</Link>
                    </li>


                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color : 'black'}}>
                          Catagory
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><Link className="dropdown-item" to="/general"  >General</Link></li>
                          <li><Link className="dropdown-item" to="/sports"   >Sports</Link></li>
                          <li><Link className="dropdown-item" to="/business" >Business</Link></li>
                          <li><Link className="dropdown-item" to="/health"   >Health</Link></li>
                          <li><Link className="dropdown-item" to="/entertainment"   >Entertainment</Link></li>
                          <li><Link className="dropdown-item" to="/science"   >Science</Link></li>
                          <li><Link className="dropdown-item" to="/technology"   >Technology</Link></li>
                        </ul>
                      </li>


                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color : 'black'}}>
                          Country 
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><Link className="dropdown-item" to="#">India</Link></li>
                          <li><Link className="dropdown-item" to="#">USA</Link></li>
                          <li><Link className="dropdown-item" to="#">Russia</Link></li>
                        </ul>
                      </li>

                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar