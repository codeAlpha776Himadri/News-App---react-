import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    newsCatagory: PropTypes.string,
    pageSize: PropTypes.number,
    APIkey: PropTypes.string
  };

  static defaultProps = {
    country: "us",
    newsCatagory: "general",
    pageSize: 10
  };

  capitalize = (name) => { return name.charAt(0).toUpperCase() + name.slice(1) }

  constructor(props) {
    super(props);
    console.log("constructor ran ");
    this.state = {
      articles: [],
      loading: true,
      status: "fetching",
      pageNo: 1,
      totalResults: 0,
    };
    document.title = ` News Ultimate - ${this.capitalize(this.props.newsCatagory)} ` 
  }

  fetchMoreData = async () => {
    this.setState({ loading : false }) ;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsCatagory}&apiKey=${this.props.APIkey}&page=${ this.state.pageNo + 1}&pageSize=${this.props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    const newArticles = data.articles; 
    this.setState({
      articles : this.state.articles.concat(newArticles) , 
      pageNo:  this.state.pageNo + 1,
      totalResults: data.totalResults
    });
  } 

  componentDidMount = async () => {
    try {
      this.props.setProgress(10) ; 
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsCatagory}&apiKey=${this.props.APIkey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      this.props.setProgress(50) ; 
      if (data.status === "ok") {
        const newsArticles = data.articles; 
        this.setState({
          articles: newsArticles,
          loading: false,
          status: "success",
          totalResults: data.totalResults,
        });
      }
      this.props.setProgress(100) ;
    } catch (error) {
      console.log(error, "contact API service provider");
    } finally {
      if (this.state.articles.length === 0) {
        // set this static data  if nothing is fetched
        this.setState({
          articles: [
            {
              author: "newsfeedback@fool.com (Trevor Jennewine)",
              title:
                "12% of Cathie Wood's Portfolio Is Invested in These 2 Growth Stocks",
              description:
                "Ark Invest has high conviction in both of these stocks. Should you?",
              url: "/",
              urlToImage:
                "https://miro.medium.com/max/1200/1*mg5YaPigfU8-cwKtkxV9gw.png",
              publishedAt: "2022-07-02T12:10:00Z",
            },
          ],
          loading: false,
          status: "success",
        });
      } 
    }
  };

  render() {
    return (
      <div > 
        <div className="heading">
          {this.state.loading === true ? (
            <div className="spinner-border text-info " role="status"></div>
          ) : (
            <div>
              <h1 style={{ fontFamily: "serif", fontSize: "50px" }}>
                {`Top ${ this.props.newsCatagory.charAt(0).toUpperCase() + this.props.newsCatagory.slice(1) } 
                  Headlines`
                }
              </h1>
            </div>
          )}
        </div>
        
        
        <InfiniteScroll
          className="container"
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults} 
          loader={this.state.articles.length+1 < this.state.totalResults? <div className="spinnerContainer">
            <div className="spinner-border text-info " role="status"></div>
          </div> : <div className="spinnerContainer"><p>- end of results -</p></div>}
        >
        
        <div>
        <div className="row  my-3 ">
          {this.state.articles.map(
            ({ title, description, urlToImage, url, publishedAt, author }) => {
              if (
                this.state.articles === undefined ||
                title === null ||
                description === null ||
                urlToImage === null ||
                url === null ||
                author === null
              )
                return ;
              return (
                <div className="col-md-4  my-3 ">
                  <NewsItem
                    key={url}
                    title={title}
                    description={description}
                    urlImg={urlToImage}
                    url={url}
                    date={publishedAt}
                    author={author}
                    catagory={this.props.newsCatagory}
                  />
                </div>
              );
            }
          )}
        </div>
        </div>

        </InfiniteScroll>

      </div>
    );
  }
}

export default News;
