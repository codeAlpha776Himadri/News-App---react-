import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import PropTypes from "prop-types";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    newsCatagory: PropTypes.string,
    pageSize: PropTypes.number,
    APIkey: PropTypes.string,
  };

  static defaultProps = {
    country: "us",
    newsCatagory: "general",
    pageSize: 10,
    APIkey: "b065937c9d4d46fd96f2749f46c50f7b",
  };

  constructor() {
    super();
    console.log("constructor ran ");
    this.state = {
      articles: [],
      loading: true,
      status: "fetching",
      pageNo: 1,
      totalResults: 0,
    };
  }

  getPage = async (num) => {
    this.setState({ loading: true });
    this.state.articles = [];
    const nextPageNo = this.state.pageNo + num;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsCatagory}&apiKey=${this.props.APIkey}&page=${nextPageNo}&pageSize=${this.props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    const newsArticles = data.articles;
    this.setState({
      articles: newsArticles,
      loading: false,
      status: "success",
      pageNo: nextPageNo,
      totalResults: data.totalResults,
    });
  };

  componentDidMount = async () => {
    // const catagory = 'sports'
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsCatagory}&apiKey=${this.props.APIkey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        const newsArticles = data.articles;
        this.setState({
          articles: newsArticles,
          loading: false,
          status: "success",
          totalResults: data.totalResults,
        });
      }
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

  getLeftPage = async () => this.getPage(-1);
  getRightPage = async () => this.getPage(1);

  render() {
    return (
      <div className="News">
        <div className="heading">
          <button
            disabled={this.state.pageNo <= 1}
            className="prev-page"
            onClick={this.getLeftPage}
          >
            <FaArrowAltCircleLeft />
          </button>
          {this.state.loading === true ? (
            <div class="spinner-border text-info " role="status"></div>
          ) : (
            <div>
              <h1 style={{ fontFamily: "serif", fontSize: "50px" }}>{`Top ${
                this.props.newsCatagory.charAt(0).toUpperCase() +
                this.props.newsCatagory.slice(1)
              } Headlines`}</h1>
            </div>
          )}
          <button
            disabled={
              this.state.pageNo + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="next-page"
            onClick={this.getRightPage}
          >
            <FaArrowAltCircleRight />
          </button>
        </div>

        <div className="row  px-5  my-3">
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
                return <div></div>;
              return (
                <div className="col-md-4  my-3">
                  <NewsItem
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
    );
  }
}

export default News;
