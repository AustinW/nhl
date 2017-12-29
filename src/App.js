import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
import NHLVideo from './NHLVideo';
import {
  fetchMatchesIfNeeded,
  invalidateMatches
} from './store/actions'
import MatchList from './MatchList'
import './App.css';
import configureStore from './store/configure'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMatchesIfNeeded())
  }
  
  handleRefreshClick(e) {
    e.preventDefault()
    
    const { dispatch } = this.props
    dispatch(invalidateMatches())
    dispatch(fetchMatchesIfNeeded())
  }
  
  render() {
    const { matches, isFetching, lastUpdated } = this.props
    return (
      <div>
        <NHLVideo></NHLVideo>
        <MatchList matches={matches}></MatchList>
      </div>
    );
  }
}

App.propTypes = {
  matches: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  // const {
  //   isFetching,
  //   lastUpdated,
  //   matches
  // } = matches || {
  //   isFetching: true,
  //   matches: []
  // }
  // 
  // return {
  //   matches,
  //   isFetching,
  //   lastUpdated
  // }
  return {
    matches: state.matches,
    isFetching: false,
  }
}

export default connect(mapStateToProps)(App);
