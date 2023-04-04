export const ReduxState_Model: string = `
// ../Models/Redux.model.ts
export interface ReduxState {
  character: CharacterState;
}

export interface CharacterState {
  character: Character;
  loading: boolean;
}
`;
export const Character_Model: string = `
// ../Models/Character.model.ts
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
`;
