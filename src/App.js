import './App.css';
import React, { Component , useState } from 'react'
import Navbar from './Navbar';
import News from './News';
import About from './About';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  constructor() {
    super() ; 
    this.state = {
      country : 'in' , 
      newsCatagory : 'general' ,
      pageSize : 20 , 
      APIkey : '686a4fba5eab4634864546caad2cf1a7' , 
      progress : 0 
    }
  }

  setProgress = (num) => {
    this.setState({
      progress : num
    })
  }

  render() {
    return (
      <div  className='App'>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#de002c'
            height={2}
            loaderSpeed={400}
            progress={this.state.progress}
          />
          <Routes>
            <Route  exact  path='/about'    element= { <About/> }/>
            <Route  exact  path='/'         element= { <News  setProgress={this.setProgress}  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/general'  element= { <News  setProgress={this.setProgress}  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/sports'   element= { <News  setProgress={this.setProgress}  key='sports'  country={this.state.country}  newsCatagory=  'sports'  pageSize={this.state.pageSize}/> }APIkey={this.state.APIkey} />
            <Route  exact  path='/business' element= { <News  setProgress={this.setProgress}  key='business'  country={this.state.country}  newsCatagory='business'   pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/health'   element= { <News  setProgress={this.setProgress}  key='health'  country={this.state.country}  newsCatagory=  'health'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/science'  element= { <News  setProgress={this.setProgress}  key='science'  country={this.state.country}  newsCatagory=  'science'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/entertainment'   element= { <News  setProgress={this.setProgress}  key='entertainment'  country={this.state.country}  newsCatagory=  'entertainment'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
            <Route  exact  path='/technology'      element= { <News  setProgress={this.setProgress}  key='technology'  country={this.state.country}  newsCatagory=  'technology'  pageSize={this.state.pageSize}/> } APIkey={this.state.APIkey} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App