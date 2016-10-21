import React from 'react';
import NewsData from './newsItem';

class NewsList extends React.Component {

  constructor(props) {
    super(props);
   } 
  render() {

    var filteredList =[];
    if(this.props.tab === 2){

      filteredList = this.props.newsList.filter(function(item){

        if(item.isStarred ===true)
          return item;
      })

    }

    else if(this.props.tab === 1){

      filteredList = this.props.newsList;
    }

  	var news = filteredList.sort(function(a,b){
  		
  		{return b.upvotes - a.upvotes}
  	}).map(newsitem => {
      return (
        <NewsData
          key={newsitem.id}
          increaseUpvotes={this.props.increaseUpvotes}
          starredNews={this.props.starredNews}
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