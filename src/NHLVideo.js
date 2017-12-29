import React, { Component } from 'react';

class NHLVideo extends Component {
  render() {
    return(
      <section className="jumbotron text-center">
        <div className="container">
          <img src="/img/nhl/nhl.svg" alt="NHL" style={{maxWidth: 128}} />
          <h1 className="jumbotron-heading">Upcoming Games</h1>
          <p className="lead text-muted"></p>
        </div>
      </section>
    )
  }
}

export default NHLVideo;
