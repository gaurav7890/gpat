import Constants from './constants';

export const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(Constants.MAX_INT));
}
