import {
  getCharacter,
  stopFetchCharacter,
} from '../redux/slices/Characters.slice';
import { store } from '../redux/store';

export const fetchMData = (value: number) => {
  store.dispatch(getCharacter(`${value}`));
};

export const cancelFetch = () => {
  store.dispatch(stopFetchCharacter());
};
