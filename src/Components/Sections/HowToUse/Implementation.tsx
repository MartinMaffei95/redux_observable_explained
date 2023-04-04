import Section from '../../Section/Section';
import {
  Epic_Root,
  Epic_function,
  sliceCharacter_with_observable,
  store_with_observable,
} from '../../../codeStrings';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ExtraData from '../../ExtraData';
const Implementation = () => {
  return (
    <Section>
      <div>
        <h2> Implementando Observable</h2>
        <h3> EPICAS</h3>
        <p>
          Para poder implementar redux observable lo primero que deberemos hacer
          es crear nuesta EPICA
        </p>

        <ExtraData>
          Recordemos que las EPICAS reciben acciones y retornan otras acciones.
        </ExtraData>
        <p>
          Lo que hará esta epica sera tomar las acciones que ingresen como
          argumento y evaluar que sean del tipo "getCharacter" gracias a la
          funcion <span className="code">ofType()</span> de redux-observable
        </p>
        <p>
          En caso de que esto sea <span className="code">true</span> nuestro
          middleware ejecutara la funcion <span className="code">ajax()</span>{' '}
          de RxJS.
        </p>
        <p>
          Esta función ejecutara el metodo{' '}
          <span className="code">.getJSON()</span> para realizar un peticion del
          tipo <span className="code">GET</span>
        </p>
        <p>
          Luego, sobre este metodo crearemos un{' '}
          <span className="code">.pipe()</span>y podremos ver tres operadores
          que estaran observando sobre él para ejecutarse segun corresponda
          <ul>
            <li>
              <span className="code"> map()</span> : ejecutará{' '}
              <span className="code">getCharacterSuccess()</span> en caso de que
              obtengamos una respuesta en la petición
            </li>
            <li>
              <span className="code"> catchError()</span> : ejecutara{' '}
              <span className="code">getCharacterError()</span> en caso de que
              obtengamos un error de la petición
            </li>
            <li>
              Primer <span className="code"> takeUntil()</span> : Quedara
              observando a que se despache la acción{' '}
              <span className="code">stopFetchCharacter()</span> . En caso de
              que se despache interrumpira el flujo de la accion.
            </li>
            <li>
              Segundo <span className="code"> takeUntil()</span> : Quedara
              observando a que se despache la acción{' '}
              <span className="code">getCharacter()</span> . Por lo tanto si el
              usuario volvio a "Buscar" un personaje esto interrumpe el flujo
              que teniamos anteriormente e inicia uno nuevo para evitar más de
              un renderizado
            </li>
          </ul>
        </p>
        <div className="syntax_container">
          <SyntaxHighlighter language="typescript" style={dracula}>
            {Epic_function}
          </SyntaxHighlighter>
        </div>
        <p>
          Si observamos con detenimiento podemos ver que todas las acciones que
          estamos despachando son las mismas que habiamos creado en nuestro{' '}
          <span className="code">slice</span>.
        </p>
        <p> Más adelante le daremos uso a esas mismas acciones.</p>
        <p>
          {' '}
          Antes de terminar con las epicas hay algo importante. En
          Redux-Observable podemos utilizar todas las funciones EPICAS que
          querramos.
        </p>
        <p>
          Para utilizarlas deberemos crear nuestro archivo raíz (root) en el
          cuál las combinaremos mediante la funcion{' '}
          <span className="code">combineEpics()</span> y exportaremos para
          utilizarlas.
        </p>
        <p>Lo podemos hacer de la siguiente manera</p>
        <div className="syntax_container">
          <SyntaxHighlighter language="typescript" style={dracula}>
            {Epic_Root}
          </SyntaxHighlighter>
        </div>
        <h3> Agregar middleware a Redux</h3>
        <p>
          Una vez tengamos nuestra primer epica deberemos notificar a redux que
          utilizaremos el middleware de Redux-Observable
        </p>
        <p>
          Para esto, en nuestro <span className="code">store.tsx</span> haremos
          lo siguiente
        </p>
        <ul>
          <li>
            {' '}
            Primero importaremos desde{' '}
            <span className="code">redux-observable</span> nuestra función para
            crear el middleware y lo ejecutaremos como vemos en la linea 5
          </li>
          <li>
            Luego, como vemos en la linea 11 agregaremos a la configuracion un
            Array con los middlewares que querramos utilizar. En este caso
            utilizaremos el <span className="code">epicMiddleware</span> que
            habiamos creado antes
          </li>
          <li>
            Finalmente ejecutaremos nustro middleware mediante su metodo{' '}
            <span className="code">.run()</span> y pasando como argumento
            nuestras epicas combinadas (<span className="code">rootEpic</span>)
          </li>
        </ul>
        <div className="syntax_container">
          <SyntaxHighlighter
            language="typescript"
            style={dracula}
            showLineNumbers
          >
            {store_with_observable}
          </SyntaxHighlighter>
        </div>
        <p>
          Una vez hecho esto ya tendremos configurado Redux-Toolkit y
          Redux-Observable. Solo resta dar funcionalidad a nuestras acciones
          dentro del slice para manejar eventos
        </p>

        <h3>Acciones en nuestro Slice</h3>
        <p>
          {' '}
          En este punto ya depende de tus reglas de aplicacion y como quieras
          manejar las acciones que dispara el usuario
        </p>
        <p>
          {' '}
          Para este ejemplo utilizaremos un componente Loader y un toast de{' '}
          <span className="code">notistack</span> para dar feedback al usuario
          sobre el estado de la peticion (exito, error, cancelación)
        </p>
        <div className="syntax_container">
          <SyntaxHighlighter
            language="typescript"
            style={dracula}
            showLineNumbers
          >
            {sliceCharacter_with_observable}
          </SyntaxHighlighter>
        </div>
      </div>
    </Section>
  );
};

export default Implementation;
