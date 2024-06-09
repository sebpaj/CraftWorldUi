import type { Location } from '../types/types';

export const getLocationReward = (
  location: Location,
  seconds: number,
): object | null => {
  if (location.name === 'Oak Forest') {
    return { Wood: Math.floor(seconds / 1) };
  } else if (location.name === 'Quarry') {
    return { Stone: Math.floor(seconds / 3) };
  }

  return null;
};
