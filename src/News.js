import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'

export class News extends Component {
  constructor() {
    super() ; 
    console.log("constructor ran ") ; 
    this.state = {
      articles : [] , 
      loading : true ,
      status :  'fetching'
    }
  }

  componentDidMount = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=686a4fba5eab4634864546caad2cf1a7' ;
    const response = await fetch(url) ; 
    const data = await response.json() ; 
    const newsArticles = data.articles ; 
    this.setState({
      articles : newsArticles , 
      loading : false , 
      status : 'success'
    })
    console.log('destructed' , this.state.articles.length) ;
  }

  render() {
    
    return (
      
      <div className='News'>
        <div className="heading">
          { (this.state.loading === true) ?  <div class="spinner-border text-success " role="status"></div> : <div><h2>Welcome to News World</h2></div> }
        </div>
          
        <div className="row  px-5  my-3">
          {
            this.state.articles.map(({ title , description , urlToImage , url}) => {
              if (title === null || description === null || urlToImage === null) return ; 
              return  <div className="col-md-4  my-3">
                        <NewsItem  
                            title={title} 
                            description = {description} 
                            urlImg={urlToImage}
                            url={url}
                        />
                      </div>
            })
          }
        </div>

      </div>
    )
  }
}

export default News