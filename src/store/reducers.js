import { 
  RECEIVE_MATCHES, 
  REQUEST_MATCHES, 
  REFRESH_MATCHES,
  INVALIDATE_MATCHES,
  PLAY_MATCH
} from './actions'

const initialState = {
  playingMatch: null,
  
  matches: []
}

function matches(state = {
  isFetching: false,
  didInvalidate: false,
  matches: []
}, action) {
  console.info('ACTION', action)
  switch(action.type) {
    case INVALIDATE_MATCHES:
      return Object.assign({}, state, { didInvalidate: true })
    case REQUEST_MATCHES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MATCHES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        matches: action.matches,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function nhlReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MATCHES:
    case REQUEST_MATCHES:
    case REFRESH_MATCHES:
      return Object.assign({}, state, {
        matches: matches(state, action)
      })
    case PLAY_MATCH:
      return
    default:
      return state
  }
  
  return state
}

export default nhlReducer
