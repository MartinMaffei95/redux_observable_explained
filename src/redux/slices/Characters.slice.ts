//MODELS
import { CharacterState, Character } from '../../models';
// REDUX LIB TYPES
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// COMPONENTS
import { sendSnackbar } from '../../services/snackbar.manager';

const initialState: CharacterState = {
  character: {} as Character,
  loading: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    getCharacter: (state, action) => {
      sendSnackbar.info('Peticion GET ejecutada');

      console.log(action);
      state.loading = true;
    },
    getCharacterSuccess: (state, action: PayloadAction<Character>) => {
      state.loading = false;
      state.character = action.payload;
      sendSnackbar.success('Peticion GET resuelta');
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

export const {
  getCharacter,
  getCharacterSuccess,
  getCharacterError,
  stopFetchCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
