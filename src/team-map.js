var teams = {
  /* Eastern Conference */
  
  // Metropolitan Division
  'Carolina Hurricanes': {
    code: 'CAR',
    name: 'Carolina Hurricanes',
    fuzzyNames: ['Hurricanes'],
    logo: 'CAR.svg',
  },
  'Columbus Blue Jackets': {
    code: 'CBJ',
    name: 'Columbus Blue Jackets',
    fuzzyNames: ['Blue Jackets', 'Jackets'],
    logo: 'CBJ.svg',
  },
  'New Jersey Devils': {
    code: 'NJD',
    name: 'New Jersey Devils',
    fuzzyNames: ['Devils'],
    logo: 'NJD.svg',
  },
  'New York Islanders': {
    code: 'NYI',
    name: 'New York Islanders',
    fuzzyNames: ['NY Islanders', 'Islanders'],
    logo: 'NYI.svg',
  },
  'New York Rangers': {
    code: 'NYR',
    name: 'New York Rangers',
    fuzzyNames: ['NY Rangers', 'Rangers'],
    logo: 'NYR.svg',
  },
  'Philadelphia Flyers': {
    code: 'PHI',
    name: 'Philadelphia Flyers',
    fuzzyNames: ['Flyers'],
    logo: 'PHI.svg',
  },
  'Pittsburgh Penguins': {
    code: 'PIT',
    name: 'Pittsburgh Penguins',
    fuzzyNames: ['Penguins'],
    logo: 'PIT.svg',
  },
  'Washington Capitals': {
    code: 'WSH',
    name: 'Washington Capitals',
    fuzzyNames: ['Capitals'],
    logo: 'WSH.svg',
  },
  
  // Atlantic Division
  'Boston Bruins': {
    code: 'BOS',
    name: 'Boston Bruins',
    fuzzyNames: ['Bruins'],
    logo: 'BOS.svg',
  },
  'Buffalo Sabres': {
    code: 'BUF',
    name: 'Buffalo Sabres',
    fuzzyNames: ['Sabres'],
    logo: 'BUF.svg',
  },
  'Detroit Red Wings': {
    code: 'DET',
    name: 'Detroit Red Wings',
    fuzzyNames: ['Red Wings', 'Wings'],
    logo: 'DET.svg',
  },
  'Florida Panthers': {
    code: 'FLA',
    name: 'Florida Panthers',
    fuzzyNames: ['Panthers'],
    logo: 'FLA.svg',
  },
  'Montreal Canadiens': {
    code: 'MTL',
    name: 'Montreal Canadiens',
    fuzzyNames: ['Canadiens'],
    logo: 'MTL.svg',
  },
  'Ottawa Senators': {
    code: 'OTT',
    name: 'Ottawa Senators',
    fuzzyNames: ['Senators'],
    logo: 'OTT.svg',
  },
  'Tampa Bay Lightning': {
    code: 'TBL',
    name: 'Tampa Bay Lightning',
    fuzzyNames: ['Lightning'],
    logo: 'TBL.svg',
  },
  'Toronto Maple Leafs': {
    code: 'TOR',
    name: 'Toronto Maple Leafs',
    fuzzyNames: ['Maple Leafs', 'Leafs'],
    logo: 'TOR.svg',
  },
  
  /* Western Conference */
  
  // Central Division
  'Chicago Blackhawks': {
    code: 'CHI',
    name: 'Chicago Blackhawks',
    fuzzyNames: ['Blackhawks'],
    logo: 'CHI.svg',
  },
  'Colorado Avalanche': {
    code: 'COL',
    name: 'Colorado Avalanche',
    fuzzyNames: ['Avalanche'],
    logo: 'COL.svg',
  },
  'Dallas Stars': {
    code: 'DAL',
    name: 'Dallas Stars',
    fuzzyNames: ['Stars'],
    logo: 'DAL.svg',
  },
  'Minnesota Wild': {
    code: 'MIN',
    name: 'Minnesota Wild',
    fuzzyNames: ['Wild'],
    logo: 'MIN.svg',
  },
  'Nashville Predators': {
    code: 'NSH',
    name: 'Nashville Predators',
    fuzzyNames: ['Predators'],
    logo: 'NSH.svg',
  },
  'St. Louis Blues': {
    code: 'STL',
    name: 'St. Louis Blues',
    fuzzyNames: ['Blues'],
    logo: 'STL.svg',
  },
  'Winnipeg Jets': {
    code: 'WPG',
    name: 'Winnipeg Jets',
    fuzzyNames: ['Jets'],
    logo: 'WPG.svg',
  },

  // Pacific Division
  'Anaheim Ducks': {
    code: 'ANA',
    name: 'Anaheim Ducks',
    fuzzyNames: ['Ducks'],
    logo: 'ANA.svg',
  },
  
  'Arizona Coyotes': {
    code: 'ARI',
    name: 'Arizona Coyotes',
    fuzzyNames: ['Coyotes'],
    logo: 'ARI.svg',
  },
  'Calgary Flames': {
    code: 'CGY',
    name: 'Calgary Flames',
    fuzzyNames: ['Flames'],
    logo: 'CGY.svg',
  },
  'Edmonton Oilers': {
    code: 'EDM',
    name: 'Edmonton Oilers',
    fuzzyNames: ['Oilers'],
    logo: 'EDM.svg',
  },
  'Los Angeles Kings': {
    code: 'LAK',
    name: 'Los Angeles Kings',
    fuzzyNames: ['Kings'],
    logo: 'LAK.svg',
  },
  'San Jose Sharks': {
    code: 'SJS',
    name: 'San Jose Sharks',
    fuzzyNames: ['Sharks'],
    logo: 'SJS.svg',
  },
  'Vancouver Canucks': {
    code: 'VAN',
    name: 'Vancouver Canucks',
    fuzzyNames: ['Canucks'],
    logo: 'VAN.svg',
  },
  'Vegas Golden Knights': {
    code: 'VGK',
    name: 'Vegas Golden Knights',
    fuzzyNames: ['Golden Knights'],
    logo: 'VGK.svg',
  },
};

export function guessTeamByName(name) {
  
  var foundTeam = null
  
  Object.keys(teams).forEach((key) => {
    let team = teams[key]
    
    if (name === key) {
      foundTeam = team
    } else {
    
      team.fuzzyNames.forEach((fuzzyName) => {
        if (!foundTeam && fuzzyName === name) {
          foundTeam = team
          return
        }
      })
      
      return
    }
  })
  
  return foundTeam
}
