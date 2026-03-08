var stations = {
  'ANTC': {
    lat: 37.995368,
    lng: -121.780374,
    name: 'Antioch',
    iconAbbreviation: 'A',
    platform1Dir: 'ʘ End',
    platform2Dir: '← W'
  },
  '12TH': {
    lat: 37.803066,
    lng: -122.271588,
    name: '12th St. Oakland City Center',
    iconAbbreviation: '12',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S',
    platform3Dir: '↑ N'
  },
  '16TH': {
    lat: 37.765214,
    lng: -122.419431,
    name: '16th St. Mission',
    iconAbbreviation: '16',
    platform1Dir: '↓ S',
    platform2Dir: '↑ N'
  },
  '19TH': {
    lat: 37.807593,
    lng: -122.268884,
    name: '19th St. Oakland',
    iconAbbreviation: '19',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S',
    platform3Dir: '↑ N'
  },
  '24TH': {
    lat: 37.752423,
    lng: -122.418294,
    name: '24th St. Mission',
    iconAbbreviation: '24',
    platform1Dir: '↓ S',
    platform2Dir: '↑ N'
  },
  ASHB: {
    lat: 37.853030,
    lng: -122.269957,
    name: 'Ashby',
    iconAbbreviation: 'AS',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S'
  },
  BALB: {
    lat: 37.721946,
    lng: -122.447433,
    name: 'Balboa Park',
    iconAbbreviation: 'BP',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  BAYF: {
    lat: 37.697756,
    lng: -122.127864,
    name: 'Bay Fair',
    iconAbbreviation: 'BF',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  BERY: {
    lat: 37.368583,
    lng: -121.874734,
    name: 'Berryessa / North San José Station',
    iconAbbreviation: 'B',
    platform1Dir: '↑ N',
    platform2Dir: '↑ N'
  },
  DBRK: {
    lat: 37.869784,
    lng: -122.267983,
    name: 'Downtown Berkeley',
    iconAbbreviation: 'DB',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S',
  },
  CAST: {
    lat: 37.690744,
    lng: -122.077439,
    name: 'Castro Valley',
    iconAbbreviation: 'CV',
    platform1Dir: '→ E',
    platform2Dir: '← W'
  },
  CIVC: {
    lat: 37.779224,
    lng: -122.413831,
    name: 'Civic Center/UN Plaza',
    iconAbbreviation: 'CC',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  COLS: {
    lat: 37.753661,
    lng: -122.196869,
    name: 'Coliseum',
    iconAbbreviation: 'CL',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  COLM: {
    lat: 37.684512,
    lng: -122.467368,
    name: 'Colma',
    iconAbbreviation: 'CM',
    platform1Dir: '↘ SE',
    platform2Dir: '↑ N'
  },
  CONC: {
    lat: 37.972070,
    lng: -122.029910,
    name: 'Concord',
    iconAbbreviation: 'CO',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S'
  },
  DALY: {
    lat: 37.706058,
    lng: -122.469084,
    name: 'Daly City',
    iconAbbreviation: 'DC',
    platform1Dir: '↗ NE',
    platform2Dir: '↗ NE',
    platform3Dir: '↓ S'
  },
  DUBL: {
    lat: 37.701640,
    lng: -121.900349,
    name: 'Dublin/Pleasanton',
    iconAbbreviation: 'DP',
    platform1Dir: 'ʘ End',
    platform2Dir: '← W'
  },
  DELN: {
    lat: 37.925596,
    lng: -122.317207,
    name: 'El Cerrito del Norte',
    iconAbbreviation: 'DN',
    platform1Dir: '↖ NW',
    platform2Dir: '↘ SE',
  },
  PLZA: {
    lat: 37.903013,
    lng: -122.299258,
    name: 'El Cerrito Plaza',
    iconAbbreviation: 'EC',
    platform1Dir: '↖ NW',
    platform2Dir: '↘ SE',
  },
  EMBR: {
    lat: 37.793011,
    lng: -122.396815,
    name: 'Embarcadero',
    iconAbbreviation: 'E',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  FRMT: {
    lat: 37.557315,
    lng: -121.976395,
    name: 'Fremont',
    iconAbbreviation: 'F',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  FTVL: {
    lat: 37.774539,
    lng: -122.224317,
    name: 'Fruitvale',
    iconAbbreviation: 'FV',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  GLEN: {
    lat: 37.732893,
    lng: -122.434087,
    name: 'Glen Park',
    iconAbbreviation: 'GP',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  HAYW: {
    lat: 37.670331,
    lng: -122.088017,
    name: 'Hayward',
    iconAbbreviation: 'H',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  LAFY: {
    lat: 37.893338,
    lng: -122.123809,
    name: 'Lafayette',
    iconAbbreviation: 'L',
    platform1Dir: '→ E',
    platform2Dir: '← W'
  },
  LAKE: {
    lat: 37.797568,
    lng: -122.265344,
    name: 'Lake Merritt',
    iconAbbreviation: 'LM',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  MCAR: {
    lat: 37.828391,
    lng: -122.267168,
    name: 'MacArthur',
    iconAbbreviation: 'MA',
    platform1Dir: '↑ N',
    platform2Dir: '↓ S',
    platform3Dir: '↗ NE',
    platform4Dir: '↓ S'
  },
  MLBR: {
    lat: 37.600546,
    lng: -122.386408,
    name: 'Millbrae',
    iconAbbreviation: 'M',
    platform1Dir: 'ʘ End',
    platform2Dir: 'ʘ End',
    platform3Dir: '↖ NW'
  },
  MLPT: {
    lat: 37.4099929,
    lng: -121.890849,
    name: 'Milpitas',
    iconAbbreviation: 'MP',
    platform1Dir: '↓ S',
    platform2Dir: '↑ N'
  },
  MONT: {
    lat: 37.789298,
    lng: -122.401471,
    name: 'Montgomery',
    iconAbbreviation: 'MO',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  NBRK: {
    lat: 37.873951,
    lng: -122.283862,
    name: 'North Berkeley',
    iconAbbreviation: 'NB',
    platform1Dir: '↖ NW',
    platform2Dir: '↘ SE',
  },
  NCON: {
    lat: 38.002613,
    lng: -122.025061,
    name: 'North Concord',
    iconAbbreviation: 'NC',
    platform1Dir: '↗ NE',
    platform2Dir: '↙ SW'
  },
  ORIN: {
    lat: 37.878232,
    lng: -122.183719,
    name: 'Orinda',
    iconAbbreviation: 'O',
    platform1Dir: '↗ NE',
    platform2Dir: '↙ SW'
  },
  PHIL: {
    lat: 37.927739,
    lng: -122.056818,
    name: 'Pleasant Hill/Contra Costa Centre',
    iconAbbreviation: 'PH',
    platform1Dir: '↗ NE',
    platform2Dir: '↙ SW'
  },
  POWL: {
    lat: 37.784957,
    lng: -122.406986,
    name: 'Powell St.',
    iconAbbreviation: 'PO',
    platform1Dir: '↙ SW',
    platform2Dir: '↗ NE'
  },
  ROCK: {
    lat: 37.844079,
    lng: -122.252641,
    name: 'Rockridge',
    iconAbbreviation: 'RO',
    platform1Dir: '↗ NE',
    platform2Dir: '↙ SW'
  },
  SBRN: {
    lat: 37.637029,
    lng: -122.415934,
    name: 'San Bruno',
    iconAbbreviation: 'SB',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  SANL: {
    lat: 37.722485,
    lng: -122.161360,
    name: 'San Leandro',
    iconAbbreviation: 'SL',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  SFIA: {
    lat: 37.615854,
    lng: -122.392502,
    name: 'SF Airport',
    iconAbbreviation: 'SFO',
    platform1Dir: '← W',
    platform2Dir: '← W'
  },
  SHAY: {
    lat: 37.634757,
    lng: -122.057569,
    name: 'South Hayward',
    iconAbbreviation: 'SH',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  SSAN: {
    lat: 37.664318,
    lng: -122.444000,
    name: 'South San Francisco',
    iconAbbreviation: 'SS',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  UCTY: {
    lat: 37.591209,
    lng: -122.017851,
    name: 'Union City',
    iconAbbreviation: 'UC',
    platform1Dir: '↘ SE',
    platform2Dir: '↖ NW'
  },
  WCRK: {
    lat: 37.904581,
    lng: -122.068276,
    name: 'Walnut Creek',
    iconAbbreviation: 'WC',
    platform1Dir: '↗ NE',
    platform2Dir: '↙ SW'
  },
  WOAK: {
    lat: 37.804660,
    lng: -122.294590,
    name: 'West Oakland',
    iconAbbreviation: 'WO',
    platform1Dir: '← W',
    platform2Dir: '→ E'
  },
  PITT: {
    lat: 38.018742,
    lng: -121.942105,
    name: 'Pittsburg/Bay Point',
    iconAbbreviation: 'P',
    platform1Dir: '→ E',
    platform2Dir: '← W'
  },
  PCTR: {
    lat: 38.016973,
    lng: -121.889496,
    name: 'Pittsburg Center',
    iconAbbreviation: 'PC',
    platform1Dir: '→ E',
    platform2Dir: '← W'
  },
  RICH: {
    lat: 37.937164,
    lng: -122.353406,
    name: 'Richmond',
    iconAbbreviation: 'R',
    platform1Dir: 'ʘ End',
    platform2Dir: '↘ SE'
  },
  WDUB: {
    lat: 37.69976,
    lng: -121.92814,
    name: 'West Dublin/Pleasanton',
    iconAbbreviation: 'WD',
    platform1Dir: '→ E',
    platform2Dir: '← W'
  },
  WARM: {
    lat: 37.501974,
    lng: -121.939250,
    name: 'Warm Springs',
    iconAbbreviation: 'WS',
    platform1Dir: '↓ S',
    platform2Dir: '↑ N'
  },
  OAKL: {
    lat: 37.713238,
    lng: -122.212191,
    name: 'Oakland International Airport',
    iconAbbreviation: 'OA',
    platform1Dir: '← W',
    platform2Dir: '→ E'
  },
}
