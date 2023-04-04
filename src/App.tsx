import { SnackbarProvider } from 'notistack';
import Loading from './Components/Loading';
import ProviderComponent from './redux/Provider/ProviderComponent';
import { GlobalStyle } from './styled-components';
import SectionAsyncFx from './Components/Sections/SectionAsyncFx';
import SectionWhatDoes from './Components/Sections/SectionWhatDoes';
import SectionHowToUse from './Components/Sections/HowToUse/SectionHowToUse';
import Title from './Components/Title/Title';
import GoodBye from './Components/Sections/GoodBye/GoodBye';

function App() {
  return (
    <ProviderComponent>
      <GlobalStyle />
      <SnackbarProvider />
      <Title />
      <SectionWhatDoes />
      <SectionAsyncFx />
      <SectionHowToUse />
      <GoodBye />
    </ProviderComponent>
  );
}

export default App;
