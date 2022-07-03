import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import PropTypes from 'prop-types'

export class App extends Component {

  constructor() {
    super() ; 
    this.state = {
      country : 'us' , 
      newsCatagory : 'business' ,
      pageSize : 20
    }
  }
  

  render() {

    const changeCatagory = (catagory) => {
      this.setState({
        newsCatagory : catagory 
      })
      console.log(this.state.newsCatagory) ; 
    }

    return (
      <div  className='App'>
        <Navbar changeCatagory={changeCatagory} />
        <News  country={this.state.country}  newsCatagory={this.state.newsCatagory}  pageSize={this.state.pageSize}/>
      </div>
    )
  }
}

export default App