import React from 'react';
import news from './data/news.js'

import NewsList from './newsList';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    
    this.increaseUpvotes = this.increaseUpvotes.bind(this);
    this.mainPage = this.mainPage.bind(this);
    this.starredPage = this.starredPage.bind(this);
   
   this.state = {
      newsList:news
     
    }
  }

  increaseUpvotes(id){

     var newsList = this.state.newsList.slice(0).map(newsitem => Object.assign({}, newsitem));
     var updatedList = [];
   
    for(var i = 0; i < newsList.length; i++) {
    var obj = newsList[i];

    if(id === obj.id) {
        obj.upvotes++;
        updatedList.push(obj);
        
    }
    else
    {
      updatedList.push(obj);
    }
  }

  console.log(updatedList);

  this.setState({
      newsList:updatedList
      
    });



  }

  mainPage(){


  }

  starredPage(){

  }




  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="navigation">
          <ul>
          <li onClick = {this.mainPage}>Top</li>
          <li onClick ={this.starredPage}>Starred</li>
          </ul>
          </div>
            <h1>{this.props.headerText}</h1>
          </div>
        </div>
        <NewsList
        newsList = {this.state.newsList}
        increaseUpvotes = {this.increaseUpvotes}
         />
        
      </div>
    );
  }
}

export default NewsFeed;
