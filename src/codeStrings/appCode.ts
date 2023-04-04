export const App_Component: string = `
// ../App.tsx
import ProviderComponent from './redux/Provider/ProviderComponent';

function App() {
  return (
    <ProviderComponent>
      <CharacterDisplay />
    </ProviderComponent>
  );
}

export default App;

`;
