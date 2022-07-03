import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {

    let {title , description , urlImg , url} = this.props ; 

    return (
      <div>
        <div className="card " style={{width: '18rem'}}>
            <img src={urlImg} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url}  target='_blank' rel='norefferer' className="btn btn-sm btn-success">Read more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem