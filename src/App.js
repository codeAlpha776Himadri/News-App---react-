import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import About from './About';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

export class App extends Component {

  constructor() {
    super() ; 
    this.state = {
      country : 'in' , 
      newsCatagory : 'general' ,
      pageSize : 20 , 
      APIkey : 'b065937c9d4d46fd96f2749f46c50f7b' 
    }
  }

  render() {

    return (
      <div  className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route  exact  path='/about'    element= { <About/> }/>
            <Route  exact  path='/'         element= { <News  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/general'  element= { <News  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/sports'   element= { <News  key='sports'  country={this.state.country}  newsCatagory=  'sports'  pageSize={this.state.pageSize}/> }APIkey={this.state.APIkey} />
            <Route  exact  path='/business' element= { <News  key='business'  country={this.state.country}  newsCatagory='business'   pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/health'   element= { <News  key='health'  country={this.state.country}  newsCatagory=  'health'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/science'  element= { <News  key='science'  country={this.state.country}  newsCatagory=  'science'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/entertainment'   element= { <News  key='entertainment'  country={this.state.country}  newsCatagory=  'entertainment'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/technology'      element= { <News  key='technology'  country={this.state.country}  newsCatagory=  'technology'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App