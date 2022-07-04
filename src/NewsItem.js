import React, { Component } from "react";
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    let { title, description, urlImg, url, date, author, catagory } = this.props;

    return (
      <div>
        <div className="card " style={{ border: "none" , width : '19em' ,  backgroundColor: 'hsl(207deg 90% 54% / 5%)'}} >
          <span
            class="badge badge-pill badge-light  position-absolute  bg-info"
            style={{
              top: "-8px",
              left: "-8px",
              color: "black",
              zIndex: "1",
              fontWeight : 'normal' , 
              backgroundColor : 'hsl(0deg 0% 83%)' , 
            }}
          >
            {catagory}
          </span>
          <img src={urlImg} className="card-img-top" alt="..." />
          <p style={{ color: "gray", fontSize: "11px", margin: "6px  15px" , marginTop : '10px'}}>
            <strong>last updated at : </strong>
            {new Date(date).toGMTString()}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "11px",
              marginTop: "-5px",
              marginLeft: "15px",
              marginBottom: "-8px",
            }}
          >
            <strong>author : </strong>
            {author}
          </p>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="norefferer"
              className="btn btn-sm btn-info  more-btn"
              style={{ color: "black" , background : 'none' ,  borderLeft: '2px solid hsl(195deg 100% 50%)' }}
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
