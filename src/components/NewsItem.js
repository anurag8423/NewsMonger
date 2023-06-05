import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, NewsUrl, author, date,source } = this.props;
        return (
            <div>
                <div className="card mx-2" >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}} >{source}</span>
                    <img src={imageUrl} className="card-img-top imgdimen" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title + '... '}</h5>
                        <p className="card-text">{description + '... '}</p>
                        <p className="card-text"><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a className="btn btn-dark" href={NewsUrl} rel='noreferrer' target="_blank" >Read More</a>   
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
