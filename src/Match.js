import React, { Component } from 'react';
import { guessTeamByName } from './team-map'
import moment from 'moment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/fontawesome-free-solid'

const formats = {
  full: 'dddd, MMMM Do YYYY, h:mm:ss a',
  short: 'dddd @ hA',
}

class Match extends Component {
  
  render() {
    
    let teamOne = guessTeamByName(this.props.details.teamOne.name)
    let teamTwo = guessTeamByName(this.props.details.teamTwo.name)
    console.info('Team 1: ', this.props.details.teamOne.name, 'FOUND: ', teamOne)
    console.info('Team 2: ', this.props.details.teamTwo.name, 'FOUND: ', teamTwo)
    
    let matchTime = moment(this.props.details.when.timeMicro)
    
    const watchButton = (matchTime.isSameOrBefore(moment()))
      ? (<a href="#" className="btn btn-success"><FontAwesomeIcon icon="video" /> Watch Live</a>)
      : 'Notify me'
    
    return(
      <div className="card game">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img src={"img/nhl/" + teamOne.logo} alt={teamOne.name} />
          </div>
          <div className="col-md-2 text-center">vs</div>
          <div className="col-md-5 text-center">
            <img src={"img/nhl/" + teamTwo.logo} alt={teamTwo.name} />
          </div>
        </div>
        {/* <h4 className="card-title text-center" title="Wednesday, December 27, 2017 @ 7:00pm PST">Wednesday @ 7:00pm</h4>*/}
        <h4 className="card-title text-center" title={matchTime.format(formats.full)}>{matchTime.format(formats.short)}</h4>
        <p className="text-center">In {matchTime.toNow(true)}</p>
        { watchButton }
      </div>
    )
  }
}

export default Match;
