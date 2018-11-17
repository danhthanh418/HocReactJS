import React, { Component } from 'react';
import {InstantSearch, SearchBox,Hits } from 'react-instantsearch/dom'

const SideBar = ()=>{
  return (
    <div className="sidebar"></div>
  )
}
const Hit = ({hit}) =>{
  return (
    <div className="hit">
      <div className="hit-image">
        <img src={hit.image} alt=""></img>
      </div>
      <div className="hit-content">
        <p>{hit.name}</p>
        <div className="hit-price">
          <p>{hit.price}</p>
        </div>
      </div>
    </div>
  )
}


const Content = ()=>{
  return (
    <div className="content">
     <Hits hitComponent={Hit}></Hits>
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="instant_search"
        className="container"
      >
      <header className="header">
        <SearchBox translations={{placeholder: 'Search For Product'}}></SearchBox>
      </header>
      <main>
        <SideBar></SideBar>
        <Content></Content>
      </main>
      </InstantSearch>
    );
  }
}

export default App;
