export const store_without_observable: string = `// ../redux/store.tsx
import { configureStore } from '@reduxjs/toolkit';
import CharactersSlice from './slices/Characters.slice';

export const store = configureStore({
    reducer: {
    character: CharactersSlice,
    },
});


`;

export const store_with_observable: string = `// ../redux/store.tsx

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/root.epic';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    character: CharactersSlice,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

`;
