import React, { Component } from "react";
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    let { title, description, urlImg, url, date, author, catagory } =
      this.props;

    return (
      <div>
        <div className="card " style={{ border: "none" , width : '19em'}} >
          <span
            class="badge badge-pill badge-success  position-absolute  bg-info "
            style={{
              top: "-8px",
              left: "-8px",
              color: "black",
              zIndex: "1",
              fontWeight : 'normal'
            }}
          >
            {catagory}
          </span>
          <img src={urlImg} className="card-img-top" alt="..." />
          <p style={{ color: "gray", fontSize: "11px", margin: "6px  15px" }}>
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
              className="btn btn-sm btn-info"
              style={{ color: "black" }}
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
