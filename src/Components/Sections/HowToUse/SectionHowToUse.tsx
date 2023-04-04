import Section from '../../Section/Section';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import InitialConfig from './InitialConfig';
import Implementation from './Implementation';
import ExtraData from '../../ExtraData';

const SectionHowToUse = () => {
  return (
    <Section>
      <div>
        <h2>Como usarlo?</h2>

        <p>
          Para implementar redux-observable en nuestra app deberemos instalarlo.
          Podremos hacer esto utilizando el comando{' '}
          <span className="code">npm install --save redux-observable </span>
        </p>
        <ExtraData>
          Para nuestro ejemplo utilizaremos - e instalaremos - react-redux,
          redux-toolkit y typescript
        </ExtraData>
        <p>
          Deberemos entender el concepto de EPICA, este es el corazón de
          Redux-Observable. Es una function que toma un flujo de acciones y
          retorna un flujo de acciones{' '}
        </p>
        <p>Suele tener esta estructura</p>
        <div className="syntax_container">
          <SyntaxHighlighter language="typescript" style={dracula}>
            {`function epicMyAction(action$: Observable<Action>, state$: StateObservable<State>): Observable<Action>;
`}
          </SyntaxHighlighter>
        </div>
        <p>
          Una vez la acción ingresa a nuestra épica podremos utilizar cualquier
          patrón Observable siempre y cuando retornemos un flujo de acciones
        </p>
        <p>
          Es importante entender que las epicas se ejecutaran DESPUÉS de que
          nuestros reducers recibieron la acción despachada.Por lo tanto las
          acciones siempre se ejecutan a través de sus reducers antes de que sus
          epicas las reciban.
        </p>
      </div>
      <InitialConfig />
      <Implementation />
    </Section>
  );
};

export default SectionHowToUse;
