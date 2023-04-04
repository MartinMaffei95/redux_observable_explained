export const sliceCharacter_without_observable: string = `
// ../redux/slices/Characters.slice.ts

//MODELS
import { CharacterState, Character } from '../../models';
// REDUX LIB TYPES
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CharacterState = {
  character: {} as Character,
  loading: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    getCharacter: (state, action) => {
    },
    getCharacterSuccess: (state, action: PayloadAction<Character>) => {
    },
    getCharacterError: (state, action) => {
    },
    stopFetchCharacter: (state) => {
    },
  },
});

export const {
  getCharacter,
  getCharacterSuccess,
  getCharacterError,
  stopFetchCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;

`;

export const sliceCharacter_with_observable: string = `// ../redux/slices/Characters.slice.ts

// NotiStack Fx
import { sendSnackbar } from '../../services/snackbar.manager';


export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    getCharacter: (state, action) => {
      sendSnackbar.info('Buscando...');
      state.loading = true;
    },

    getCharacterSuccess: (state, action: PayloadAction<Character>) => {
      state.loading = false;
      state.character = action.payload;
      sendSnackbar.success('Data obtenida!');
    },

    getCharacterError: (state, action) => {
      state.loading = false;
      sendSnackbar.error('Ocurrio un error');
    },

    stopFetchCharacter: (state) => {
      state.loading = false;
      sendSnackbar.warning('Se detuvo la petición');
    },
  },
});

`;
