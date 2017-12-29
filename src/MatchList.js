import React, { Component } from 'react';
import Match from './Match';

class MatchList extends Component {
  constructor() {
    super();
  }
  
  render() {
    
    if (this.props.matches && !this.props.matches.isFetching) {
      var matchCards = this.props.matches.matches.map((match, index) => {
        return <Match key={index} details={match}></Match>
      })
    } else {
      var matchCards = "";
    }
    
    return(
      <div className="album text-muted">
        <div className="container">
          <div className="row" id="matches">
            { matchCards }
          </div>
        </div>
      </div>
    )
  }
}

MatchList.propTypes = {
  
}

export default MatchList;
