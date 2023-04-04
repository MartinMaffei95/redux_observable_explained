import { Character } from '.';

export interface ReduxState {
  character: CharacterState;
}

export interface CharacterState {
  character: Character;
  loading: boolean;
}
