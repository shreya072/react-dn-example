import React from 'react';

class NewsData extends React.Component{

	constructor(props) {
    super(props);
    this.changeUpvotes = this.changeUpvotes.bind(this);
    this.newsMarked = this.newsMarked.bind(this);
}

changeUpvotes(){

  this.props.increaseUpvotes(this.props.id);
}

newsMarked(){

  this.props.starredNews(this.props.id);
}


    render(){

    	return (
      <li>
      <span className="glyphicon glyphicon-chevron-up" onClick = {this.changeUpvotes}>{this.props.upvotes}</span>
       <div className= "news-data">{this.props.newsdata}</div>
       <span className={this.props.isStarred ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty"}
       onClick = {this.newsMarked}
       ></span>
      </li>
    );




   }



}

export default NewsData;