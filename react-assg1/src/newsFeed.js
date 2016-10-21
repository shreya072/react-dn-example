import React from 'react';
import news from './data/news.js'

import NewsList from './newsList';
import NewsHeader from './newsHeader';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    
    this.increaseUpvotes = this.increaseUpvotes.bind(this);
    this.starredNews = this.starredNews.bind(this);
    this.switchToStarred = this.switchToStarred.bind(this);
    this.switchToTop = this.switchToTop.bind(this);

   this.state = {
      newsList:news,
      tab:1
    }
  }

  increaseUpvotes(id){

    var newsList,updatedList,listLen,obj;

      newsList = this.state.newsList.slice(0).map(newsitem => Object.assign({}, newsitem));
      updatedList = [];
      listLen = newsList.length;

    for(var i = 0; i < listLen; i++) {
     obj = newsList[i];

    if(id === obj.id) {
        obj.upvotes++;
        updatedList.push(obj);
        
    }
    else
    {
      updatedList.push(obj);
    }
  }



  this.setState({
      newsList:updatedList
      
    });



  }

  starredNews(id){

    var newsList,updatedList,listLen,obj;

      newsList = this.state.newsList.slice(0).map(newsitem => Object.assign({}, newsitem));
      updatedList = [];
      listLen = newsList.length;

    for(var i = 0; i < listLen; i++) {
     obj = newsList[i];

     if(id === obj.id) {
        obj.isStarred =true;
        updatedList.push(obj);
        
    }
    else
    {
      updatedList.push(obj);
    }
  }

  this.setState({
      newsList:updatedList
      
    });


  }

  switchToTop(){

     this.setState({
      tab:1
    })

  }

  switchToStarred(){

  this.setState({
      tab:2
    })
  }

  


render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NewsHeader
            switchToTop = {this.switchToTop}
            switchToStarred = {this.switchToStarred}
            />
            <h3>{this.props.headerText}</h3>
          </div>
        </div>
        <NewsList
        newsList = {this.state.newsList}
        tab = {this.state.tab}
        increaseUpvotes = {this.increaseUpvotes}
        starredNews={this.starredNews}
         />
        
      </div>
    );
  
  }
}

export default NewsFeed;
