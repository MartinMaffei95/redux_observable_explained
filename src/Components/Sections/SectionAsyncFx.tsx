import Section from '../Section/Section';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../models';
import { cancelFetch, fetchMData } from '../../services/fetch-characters.fetch';
import ImageSection from '../Section/ImageSection';
import Loading from '../Loading';

const SectionAsyncFx = () => {
  const { character } = useSelector((state: ReduxState) => state.character);
  const { loading } = useSelector((state: ReduxState) => state.character);
  const randomNumber = (maxN: number): number => {
    const rm = Math.round(Math.random() * maxN);
    return rm;
  };
  return (
    <Section>
      <div className="displayed_data">
        <div className="displayed_data-data">
          <h2>Hora de verlo en accion!</h2>

          <p>
            Entendiendo esto. Vamos con el ejemplo. En este caso podremos
            presionar el boton de "Buscar" cuantas veces querramos pero
            finalmente solo recibiremos un renderizado gracias a redux
            observable
          </p>
          <p>
            De igual forma cuando "Cancelamos" la petición. Jamas renderizamos
            la respuesta del servidor debido a que interrumpimos el flujo de
            acciones
          </p>
          <div className="displayed_data-buttons">
            <button
              style={{ background: '#416230' }}
              onClick={() => fetchMData(randomNumber(826))}
            >
              Buscar
            </button>
            <button
              style={{ background: '#ffaa00' }}
              onClick={cancelFetch}
              disabled={loading ? false : true}
            >
              CANCELAR FETCH
            </button>
          </div>
        </div>
        <div className="displayed_data-image">
          {loading ? (
            <div className="isLoading">
              <Loading />
              <div className="isLoading-image">
                <ImageSection
                  title={character?.name || ''}
                  subtitle={character?.gender || ''}
                  image={
                    character?.image ||
                    'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
                  }
                />
              </div>
            </div>
          ) : (
            <ImageSection
              title={character?.name || ''}
              subtitle={character?.gender || ''}
              image={
                character?.image ||
                'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
              }
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default SectionAsyncFx;
