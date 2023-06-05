import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './spinner.js'
import PropTypes from 'prop-types'


class NewsComponent extends Component {
  // article = [
  //   {
  //     "source": {
  //       "id": "bbc-sport",
  //       "name": "BBC Sport"
  //     },
  //     "author": null,
  //     "title": "Yorkshire racism hearing terrible look - Vaughan",
  //     "description": "Former England captain Michael Vaughan says the disciplinary hearing into allegations of racism at Yorkshire is a \"terrible look\" for cricket.",
  //     "url": "http://www.bbc.co.uk/sport/cricket/64832070",
  //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F9D1/production/_128835936_vaughan.jpg",
  //     "publishedAt": "2023-03-04T03:37:13.1311576Z",
  //     "content": "Former England captain Michael Vaughan is the only person charged by the ECB to attend the hearing\r\nFormer England captain Michael Vaughan says the disciplinary hearing into allegations of racism at … [+6556 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  article=[];
  static defaultProps={
    country:'in',
    pagesize:8,
    category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
  constructor() {
    super();
    console.log("This is a constructor of News component");
    this.state = {
      article: this.article,
      loading: false,
      page:1,
      total:3
    }
  }
  async updateNews(){
    this.setState({loading:true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c7447eb90184d7eb7f335264b10c92f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    const data = await fetch(url);
    const parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      total:parsedData.totalResults,
      article: parsedData.articles,
      loading:false
    })
    document.title='NewsMonger-'+this.props.category;
    console.log(this.state.page)
    console.log(Math.ceil(this.state.total/20))
  }
  async componentDidMount() {
    this.updateNews()
    console.log(process.env.REACT_API_KEY);
  }
  handleNext=async ()=>{
    this.setState({page:this.state.page+1})
    this.updateNews()
  }
  handlePrev=async ()=>{
    this.setState({page:this.state.page-1})
    this.updateNews()
  }
  render() {
    return (
      <>
        <div className="container ">
          <h1 className='text-center my-9' >This is News Compemenent</h1>
          {this.state.loading && <Spin/>}
          <div className='row' >
            {this.state.article.map((element) => {
              return (
                <div className='col-md-3 my-2' key={element.url}><NewsItem title={element.title?element.title.slice(0, 40):"No Title"} description={element.description?element.description.slice(0, 70):"No Description"} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} NewsUrl={element.url} author={element.author}
                date={element.publishedAt} source={element.source.name}/></div>
              )
            })}
          </div>
          <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3 mx-3" onClick={this.handlePrev}  >&larr;Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.total/20)} type="button" onClick={this.handleNext} className="btn btn-dark my-3 mx-3"  >Next&rarr;</button>
        </div>
        </div>
      </>

    )
  }
}

export default NewsComponent
