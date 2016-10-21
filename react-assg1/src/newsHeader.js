import React from 'react';

class NewsHeader extends React.Component{

	constructor(props) {
    super(props);
    this.topTab= this.topTab.bind(this);
    this.starredTab = this.starredTab.bind(this);
    }

    topTab(){


    	this.props.switchToTop();
    }
    starredTab(){


    	this.props.switchToStarred();
    }

    render(){

    	return(
    	<div className="navigation">
          <ul>
          <li onClick={this.topTab}>Top</li>
          <li onClick={this.starredTab}>Starred</li>
          </ul>
          </div>
          )
    }

}

export default NewsHeader
