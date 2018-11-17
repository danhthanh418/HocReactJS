import React, { Component } from 'react';
import {InstantSearch, SearchBox,Hits,Highlight,Stats,SortBy } from 'react-instantsearch/dom'

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
        <div className="hit-price">
          <p>{hit.price}</p>
        </div>
        <div className="hit-name">
          <p attributeName="name" hit={hit}>{hit.name}</p>
        </div>
        <div className="hit-descripion">
          <p attributeName="descripion" hit={hit}>{hit.description}</p>
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
        appId="WCC7MJNPPZ"
        apiKey="580bf217e4f13f3f17879833ccb4a4cb"
        indexName="dev_store"
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
