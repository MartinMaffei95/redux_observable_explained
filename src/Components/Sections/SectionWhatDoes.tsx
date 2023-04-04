import React from 'react';
import Section from '../Section/Section';

const SectionWhatDoes = () => {
  return (
    <Section>
      <div>
        <div>
          <h2>Qué hace?</h2>
          <p>
            Redux observable es un middleware basado en RxJS. Podremos manipular
            o cancelar el flujo de nuestras acciones para crear efectos
            secundarios y más.
          </p>
          <p>
            Para lograrlo el middleware observará todas las acciones que se
            despachen -<span className="code">dispatch()</span>- hacia nuestra
            store.
          </p>
        </div>
        <div>
          <h3>Para que lo utilizo?</h3>
          <p>
            Supongamos que realizamos una peticion asincrona hacia una API
            mediante un boton de buscar personaje random. Si el usuario clickea
            tres veces el boton "Buscar" eso se traducirian a tres peticiones
            hacia la API.
          </p>
          <p>
            Estas peticiones, como todas las que realicemos a un servicio, se
            resolveran - en un determinado tiempo - y por tanto generaran tres
            renderizados en nuestra aplicacion dejando inconsistencias en el
            resultado final. Debido a que se renderizara una imagen, luego otra
            y otra.
          </p>
          <p>
            Redux-Observable cobra especial importancia en estos casos debido a
            que nos permite manipular ese flujo para poder cancelar peticiones,
            en este caso, si es que realizamos otra
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SectionWhatDoes;
