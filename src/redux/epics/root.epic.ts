import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './fetchMorty.epic';

export const rootEpic = combineEpics(fetchUserEpic);
