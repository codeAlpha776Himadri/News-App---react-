import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import PropTypes from 'prop-types'
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa'

export class News extends Component {

  static propTypes = {
    country : PropTypes.string ,
    newsCatagory : PropTypes.string , 
    pageSize : PropTypes.number
  }

  static defaultProps = {
    country : 'us' ,
    newsCatagory : 'sports' , 
    pageSize : 10 
  }

  constructor() {
    super() ; 
    console.log("constructor ran ") ; 
    this.state = {
      articles : [] , 
      loading : true ,
      status :  'fetching' , 
      pageNo : 1 ,
      totalResults : 0 
    }
  }

  componentDidMount = async () => {
    // const catagory = 'sports'
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${this.state.pageNo}&pageSize=${this.props.pageSize}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ;
      if (data.status === 'ok') {
        const newsArticles = data.articles ; 
        this.setState({
          articles : newsArticles , 
          loading : false , 
          status : 'success' , 
          totalResults : data.totalResults 
        })
      }  
    } catch (error) {
      console.log(error , 'contact API service provider') ; 
    } finally {
      // console.log(this.state.articles.length) ; 
      // if anything from API is not recieved then set this static data 
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

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${nextPageNo}&pageSize=${this.props.pageSize}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ; 
      const newsArticles = data.articles ; 

      this.setState({
        articles : newsArticles , 
        loading : false , 
        status : 'success' , 
        pageNo : nextPageNo  , 
        totalResults : data.totalResults 
      })
    }
  
    const getRightPage = async () => {   

      console.log("getting right page only for you" , this.state.pageNo) ;
      this.setState({
        loading : true 
      }) 

      const nextPageNo = this.state.pageNo + 1 ; 

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.newsCatagory}&apiKey=686a4fba5eab4634864546caad2cf1a7&page=${nextPageNo}&pageSize=${this.props.pageSize}` ;
      const response = await fetch(url) ; 
      const data = await response.json() ; 
      const newsArticles = data.articles ; 

      this.setState({
        articles : newsArticles , 
        loading : false , 
        status : 'success' , 
        pageNo : nextPageNo , 
        totalResults : data.totalResults 
      })
    }
    // Math.ceil(this.state.articles.length / this.state.pageNo
    return (
      
      <div className='News'>
        <div className="heading">
          <button disabled={this.state.pageNo <= 1} className="prev-page"  onClick={getLeftPage}><FaArrowAltCircleLeft/></button>
          { this.state.loading === true ?  <div class="spinner-border text-success " role="status"></div> : <div><h1>Welcome to News World</h1></div> }
          <button  disabled={ this.state.pageNo + 1 >  Math.ceil(this.state.totalResults / this.props.pageSize)}  className="next-page"  onClick={getRightPage}><FaArrowAltCircleRight/></button>
          
        </div>
          
        <div className="row  px-5  my-3">
          {
            this.state.articles.map(({ title , description , urlToImage , url}) => {
              if (this.state.articles === undefined ||  title === null || description === null || urlToImage === null || url === null) return <div></div> ; 
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