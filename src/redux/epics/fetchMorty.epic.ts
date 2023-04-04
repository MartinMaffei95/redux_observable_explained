import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { of, takeUntil } from 'rxjs';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import {
  getCharacter,
  getCharacterError,
  getCharacterSuccess,
  stopFetchCharacter,
} from '../slices/Characters.slice';

// epic
export const fetchUserEpic = (action$: any) =>
  action$.pipe(
    ofType(getCharacter.type),
    mergeMap((action: any) =>
      ajax
        .getJSON(`https://rickandmortyapi.com/api/character/${action.payload}`)
        .pipe(
          delay(2000),
          map((response: any) => getCharacterSuccess(response)),
          catchError((error) => of(getCharacterError(error))),
          takeUntil(action$.pipe(ofType(stopFetchCharacter.type))),
          takeUntil(action$.pipe(ofType(getCharacter.type)))
        )
    )
  );
