interface LevelOfHealthConcernContent {
  color: string;
  aqiRange: number[];
  info: string;
}

export const cnLevelsOfHealthConcern: LevelOfHealthConcernContent[] = [
  {
    color: 'green',
    aqiRange: [0, 50],
    info: 'Excellent',
  },
  {
    color: '#DAA520',
    aqiRange: [51, 100],
    info: 'Good',
  },
  {
    color: 'orange',
    aqiRange: [101, 150],
    info: 'Lightly Polluted',
  },
  {
    color: 'red',
    aqiRange: [151, 200],
    info: 'Moderately Polluted',
  },
  {
    color: 'purple',
    aqiRange: [201, 300],
    info: 'Heavily Polluted',
  },
  {
    color: 'Maroon',
    aqiRange: [301, 500],
    info: 'Severely Polluted',
  },
];
