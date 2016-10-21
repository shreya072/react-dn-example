import React from 'react';

class NewsData extends React.Component{

	constructor(props) {
    super(props);
    this.changeUpvotes = this.changeUpvotes.bind(this);

}

changeUpvotes(){

  this.props.increaseUpvotes(this.props.id);



}
    render(){

    	return (
      <li>
      <span className="glyphicon glyphicon-chevron-up" onClick = {this.changeUpvotes}>{this.props.upvotes}</span>
       <div className= "news-data">{this.props.newsdata}</div>
       <span className="glyphicon glyphicon-star-empty"></span>
      </li>
    );




   }



}

export default NewsData;