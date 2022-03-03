import React, { Component } from 'react';


class News extends Component{
    render(){
      return(
        <div>News Feed {this.props.location.pathname}</div>
      )
    }
}

export default News;