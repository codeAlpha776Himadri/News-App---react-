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
      prevCountry : 'in' , 
      newsCatagory : 'general' ,
      pageSize : 20 , 
      APIkey : process.env.REACT_APP_API_KEY , 
      progress : 0 
    }
  }

  setProgress = (num) => {
    this.setState({
      progress : num
    })
  }

  setCountry = (country) => {
    this.setState({
      country : country 
    })
  }

  setCatagory = (catagory) => {
    this.setState({
      newsCatagory : catagory 
    })
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.state.prevCountry !== this.state.country) {
      this.setState({ prevCountry : this.state.country }) ; 
      console.log(this.state.prevCountry + "    " + this.state.country) ;
    }
     
  }


  render() {
    return (
      <div  className='App'>
        <Router>
          <Navbar newsCatagory={this.state.newsCatagory}  setCatagory={this.setCatagory}  setCountry ={this.setCountry}  currentCountry={this.state.country}/>
          <LoadingBar
            color='#de002c'
            height={2}
            loaderSpeed={400}
            progress={this.state.progress}
          />
          <Routes>
            <Route  exact  path='/about'    element= { <About/> }/>
            <Route  exact  path='/'         element= { <News  setProgress={this.setProgress}  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            {/* <Route  exact  path='/general'  element= { <News  setProgress={this.setProgress}  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/sports'   element= { <News  setProgress={this.setProgress}  key='sports'  country={this.state.country}  newsCatagory=  'sports'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}  /> } />
            <Route  exact  path='/business' element= { <News  setProgress={this.setProgress}  key='business'  country={this.state.country}  newsCatagory='business'   pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> } />
            <Route  exact  path='/health'   element= { <News  setProgress={this.setProgress}  key='health'  country={this.state.country}  newsCatagory=  'health'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> }  />
            <Route  exact  path='/science'  element= { <News  setProgress={this.setProgress}  key='science'  country={this.state.country}  newsCatagory=  'science'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}   /> }  />
            <Route  exact  path='/entertainment'   element= { <News  setProgress={this.setProgress}  key='entertainment'  country={this.state.country}  newsCatagory=  'entertainment'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}  /> }  />
            <Route  exact  path='/technology'      element= { <News  setProgress={this.setProgress}  key='technology'  country={this.state.country}  newsCatagory=  'technology'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> }  /> */}



            <Route  exact  path={`/general/`+`${this.state.country}`}  element= { <News  setProgress={this.setProgress}  key='general'  country={this.state.country}  newsCatagory= 'general'  pageSize={this.state.pageSize}   APIkey={this.state.APIkey} /> } />
            <Route  exact  path={`/sports/`+`${this.state.country}`}   element= { <News  setProgress={this.setProgress}  key='sports'  country={this.state.country}  newsCatagory=  'sports'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}  /> } />
            <Route  exact  path={`/business/`+`${this.state.country}`} element= { <News  setProgress={this.setProgress}  key='business'  country={this.state.country}  newsCatagory='business'   pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> } />
            <Route  exact  path={`/health/`+`${this.state.country}`}   element= { <News  setProgress={this.setProgress}  key='health'  country={this.state.country}  newsCatagory=  'health'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> }  />
            <Route  exact  path={`/science/`+`${this.state.country}`}  element= { <News  setProgress={this.setProgress}  key='science'  country={this.state.country}  newsCatagory=  'science'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}   /> }  />
            <Route  exact  path={`/entertainment/`+`${this.state.country}`}   element= { <News  setProgress={this.setProgress}  key='entertainment'  country={this.state.country}  newsCatagory=  'entertainment'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey}  /> }  />
            <Route  exact  path={`/technology/`+`${this.state.country}`}      element= { <News  setProgress={this.setProgress}  key='technology'  country={this.state.country}  newsCatagory=  'technology'  pageSize={this.state.pageSize}  APIkey={this.state.APIkey} /> }  />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App