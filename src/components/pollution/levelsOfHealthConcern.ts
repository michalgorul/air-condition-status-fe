interface LevelOfHealthConcernContent {
  color: string;
  aqiRange: number[];
}

export const USLevelsOfHealthConcern: Map<string, LevelOfHealthConcernContent> =
  new Map();

USLevelsOfHealthConcern.set('good', { color: 'green', aqiRange: [0, 50] });
USLevelsOfHealthConcern.set('moderate', {
  color: 'green',
  aqiRange: [51, 100],
});
USLevelsOfHealthConcern.set('unhealthyForSensitiveGroups', {
  color: 'green',
  aqiRange: [101, 150],
});
USLevelsOfHealthConcern.set('unhealthy', {
  color: 'green',
  aqiRange: [151, 200],
});
USLevelsOfHealthConcern.set('veryUnhealthy', {
  color: 'green',
  aqiRange: [201, 300],
});
USLevelsOfHealthConcern.set('hazardous', {
  color: 'green',
  aqiRange: [301, 500],
});
