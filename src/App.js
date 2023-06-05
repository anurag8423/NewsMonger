import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import NewsComponent from './components/NewsComponent';
import News from './components/aNews';
import LoadingBar from 'react-top-loading-bar';
import {
  Routes,
  Route
} from 'react-router-dom';
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
      <div style={{height:"8vh"}}></div>
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="general" pagesize={5}/>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="business" pagesize={5}/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="entertainment" pagesize={5}/>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="business" pagesize={5}/>}></Route>
          <Route exact path='/' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="general" pagesize={5}/>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="health" pagesize={5}/>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="science" pagesize={5}/>}></Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="sports" pagesize={5}/>}></Route>
        </Routes>
        
        {/* <News setProgress={this.setProgress} apikey={process.env.REACT_API_KEY} country="in" category="sports" pagesize={5}/> */}
      </div>
    )
  }
}
