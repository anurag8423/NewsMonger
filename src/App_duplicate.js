import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import News from './components/aNews';
import LoadingBar from 'react-top-loading-bar';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom';
export default class App extends Component {
  apikey = process.env.REACT_API_KEY
  state={
    progress:5
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NewsComponent key="home" country="in" category="general" pagesize={5}/>}> </Route>
          <Route exact path="/business" element={<NewsComponent key="business" country="in" category="business" pagesize={5}/>}></Route>
          <Route exact path="/entertainment" element={<NewsComponent key="entertainment" country="in" category="entertainment" pagesize={5}/>}></Route>
          <Route exact path="/" element={<NewsComponent key="general" country="in" category="general" pagesize={5}/>}></Route>
          <Route exact path="/health" element={<NewsComponent key="health" country="in" category="health" pagesize={5}/>}></Route>
          <Route exact path="/science" element={<NewsComponent key="science" country="in" category="science" pagesize={5}/>}></Route>
          <Route exact path="/sports" element={<NewsComponent key="sports" country="in" category="sports" pagesize={5}/>}></Route>
        </Routes>
        </BrowserRouter> */}
        {/* <NewsComponent country="in" category="sports" pagesize={20}/> */}
        <div style={{height:"8vh"}}></div>
        <News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="sports" pagesize={5}/>
      </div>
    )
  }
}
