import { cnLevelsOfHealthConcern } from 'src/components/pollution/levelsOfHealthConcernCn';
import { between } from 'src/utils/between';

export interface LevelOfHealthConcernContent {
  color: string;
  aqiRange: number[];
  info: string;
}

export const usLevelsOfHealthConcern: LevelOfHealthConcernContent[] = [
  {
    color: 'green',
    aqiRange: [0, 50],
    info: 'Good',
  },
  {
    color: '#DAA520',
    aqiRange: [51, 100],
    info: 'Moderate',
  },
  {
    color: 'orange',
    aqiRange: [101, 150],
    info: 'Unhealthy for Sensitive Groups',
  },
  {
    color: 'red',
    aqiRange: [151, 200],
    info: 'Unhealthy',
  },
  {
    color: 'purple',
    aqiRange: [201, 300],
    info: 'Very Unhealthy',
  },
  {
    color: 'Maroon',
    aqiRange: [301, 500],
    info: 'Hazardous',
  },
];

export const getCnColor = (value: number) => {
  const [cnInfo] = cnLevelsOfHealthConcern.filter(item => {
    const [min, max] = item.aqiRange;
    return between(value, min, max);
  }, []);

  return cnInfo.color;
};

export const getUsColor = (value: number) => {
  const [usInfo] = usLevelsOfHealthConcern.filter(item => {
    const [min, max] = item.aqiRange;
    return between(value, min, max);
  }, []);

  return usInfo.color;
};
