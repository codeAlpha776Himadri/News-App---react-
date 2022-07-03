import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

export class App extends Component {

  constructor() {
    super() ; 
    this.state = {
      country : 'us' , 
      newsCatagory : 'general' ,
      pageSize : 20
    }
  }
  

  render() {

    return (
      <div  className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route  exact  path='/'         element= { <News  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}/> } />
            <Route  exact  path='/general'  element= { <News  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}/> } />
            <Route  exact  path='/sports'   element= { <News  key='sports'  country={this.state.country}  newsCatagory=  'sports'  pageSize={this.state.pageSize}/> } />
            <Route  exact  path='/business' element= { <News  key='business'  country={this.state.country}  newsCatagory='business'   pageSize={this.state.pageSize}/> } />
            <Route  exact  path='/health'   element= { <News  key='health'  country={this.state.country}  newsCatagory=  'health'  pageSize={this.state.pageSize}/> } />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App