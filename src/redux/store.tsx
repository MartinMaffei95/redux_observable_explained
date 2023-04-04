import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import CharactersSlice from './slices/Characters.slice';
import { rootEpic } from './epics/root.epic';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    character: CharactersSlice,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
