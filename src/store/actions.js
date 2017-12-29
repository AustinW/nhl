import fetch from 'cross-fetch'

export const REQUEST_MATCHES = 'REQUEST_MATCHES'
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES'
export const REFRESH_MATCHES = 'REFRESH_MATCHES'
export const INVALIDATE_MATCHES = 'INVALIDATE_MATCHES'
export const PLAY_MATCH = 'PLAY_MATCH'

export function invalidateMatches() {
  return {
    type: INVALIDATE_MATCHES
  }
}

export function requestMatches() {
  return {
    type: REQUEST_MATCHES
  }
}

export function receiveMatches(json) {
  return {
    type: RECEIVE_MATCHES,
    matches: json[0].pageFunctionResult,
    receivedAt: Date.now()
  }
}

export function fetchMatches() {
  return dispatch => {
    dispatch(requestMatches())
    return fetch('https://api.apify.com/v1/muu8Sc8FAo8ihA5XY/crawlers/e7bwsJzF5ThxeMSKT/lastExec/results?token=zrkyaYEjJ8aZj56ejqMdGs6W7')
      .then(response => response.json())
      .then(json => dispatch(receiveMatches(json)))
  }
}

function shouldFetchMatches(state) {
  const matches = state.matches
  
  if (!matches) {
    return true
  } else if (matches.isFetching) {
    return false
  } else {
    return matches.didInvalidate
  }
}

export function fetchMatchesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMatches(getState())) {
      return dispatch(fetchMatches())
    }
  }
}

export function refreshMatches() {
  return { type: REFRESH_MATCHES }
}

export function playMatch(id) {
  return { type: PLAY_MATCH, id }
}
