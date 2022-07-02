import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa'

export class News extends Component {
  constructor() {
    super() ; 
    console.log("constructor ran ") ; 
    this.state = {
      articles : [] , 
      loading : true ,
      status :  'fetching' , 
      newsCatagory : 'sports' , 
      pageNo : 1
    }
  }

  componentDidMount = async () => {
    // const catagory = 'sports'
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${this.state.pageNo}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ;
      if (data.status === 'ok') {
        const newsArticles = data.articles ; 
        this.setState({
          articles : newsArticles , 
          loading : false , 
          status : 'success' 
        })
      }  
    } catch (error) {
      console.log(error , 'contact API service provider') ; 
    } finally {
      // console.log(this.state.articles.length) ; 
      if (this.state.articles.length === 0) {
        console.log('i am here')
        this.setState({
          articles : [{
              author: "newsfeedback@fool.com (Trevor Jennewine)",
              title: "12% of Cathie Wood's Portfolio Is Invested in These 2 Growth Stocks",
              description: "Ark Invest has high conviction in both of these stocks. Should you?",
              url: "https://www.fool.com/investing/2022/07/02/12-of-cathie-woods-portfolio-invested-in-2-stocks/",
              urlToImage: "https://g.foolcdn.com/editorial/images/687563/investor-30.jpg",
              publishedAt: "2022-07-02T12:10:00Z",
          }] , 
          loading : false , 
          status : 'success' 
        })
      }
    }
  }

  render() {

    const getLeftPage = async () => {  
      console.log("getting left page only for you" , this.state.pageNo) ;
      this.setState({
        loading : true 
      }) 

      if (this.state.pageNo === 1)  {
        console.log("You are already at first page") ; 
        return ;
      }

      const nextPageNo = this.state.pageNo - 1 ; 

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${nextPageNo}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ; 
      const newsArticles = data.articles ; 

      this.setState({
        articles : newsArticles , 
        loading : false , 
        status : 'success' , 
        pageNo : nextPageNo 
      })
    }
  
    const getRightPage = async () => {  
      console.log("getting right page only for you" , this.state.pageNo) ;
      this.setState({
        loading : true 
      }) 

      const nextPageNo = this.state.pageNo + 1 ; 

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${nextPageNo}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ; 
      const newsArticles = data.articles ; 

      this.setState({
        articles : newsArticles , 
        loading : false , 
        status : 'success' , 
        pageNo : nextPageNo 
      })
    }
    
    return (
      
      <div className='News'>
        <div className="heading">
          <div className="prev-page"  onClick={getLeftPage}><FaArrowAltCircleLeft/></div>
          { this.state.loading === true ?  <div class="spinner-border text-success " role="status"></div> : <div><h1>Welcome to News World</h1></div> }
          <div className="next-page"  onClick={getRightPage}><FaArrowAltCircleRight/></div>
        </div>
          
        <div className="row  px-5  my-3">
          {
            this.state.articles.map(({ title , description , urlToImage , url}) => {
              if (title === null || description === null || urlToImage === null || url === null || this.state.articles === undefined) return <div></div> ; 
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