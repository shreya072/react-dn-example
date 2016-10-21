import React from 'react';
import NewsData from './newsItem';

class NewsList extends React.Component {
  render() {

  	var news = this.props.newsList.sort(function(a,b){
  		
  		{return b.upvotes - a.upvotes}
  	}).map(newsitem => {
      return (
        <NewsData
          key={newsitem.id}
          increaseUpvotes={this.props.increaseUpvotes}
          {...newsitem}
         />
      );


    });




  	return(

  		<div className="page-content">
              <ul className="news-list">
                {news}

              </ul>
         </div>  







  		)




  }

}

  export default NewsList;