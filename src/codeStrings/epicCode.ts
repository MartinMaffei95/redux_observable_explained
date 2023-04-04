export const Epic_function: string = `// ./fetchCharacterEpic.epic
export const fetchCharacterEpic = (action$: any) =>
  action$.pipe(
    ofType(getCharacter.type),
    mergeMap((action: any) =>
      ajax
        .getJSON(´https://rickandmortyapi.com/api/character/{$}{action.payload}´)
        .pipe(
          delay(2000), //<== this delay is not necesary. Is only available for the example
          map((response: any) => getCharacterSuccess(response)),
          catchError((error) => of(getCharacterError(error))),
          takeUntil(action$.pipe(ofType(stopFetchCharacter.type))),     //<== This listen the action "stopFetchCharacter"
          takeUntil(action$.pipe(ofType(getCharacter.type)))            //<== This listen the action "getCharacter"
        )
    )
  );
`;

export const Epic_Root: string = `// ./fetchCharacterEpic.epic
import { combineEpics } from 'redux-observable';
import { fetchCharacterEpic } from './fetchCharacterEpic.epic';

export const rootEpic = combineEpics(fetchUserEpic);


// import {epic1} from 'epic1';
// import {epic2} from 'epic2';
// import {epic3} from 'epic3';


// ## You can combine multiple epics like this
// export const rootEpic = combineEpics( epic1, epic2, epic3);

  `;
