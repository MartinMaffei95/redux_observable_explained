import React from 'react';
import Section from '../../Section/Section';
import LinkCard from '../../LinkCard/LinkCard';
import { AiFillGithub, AiFillLinkedin, AiFillRocket } from 'react-icons/ai';
const GoodBye = () => {
  return (
    <Section>
      <div>
        <h2>Final + código</h2>
        <p>
          Siguiendo esta guía podras generar la primer implementacion de
          redux-observable para luego escalarala. Modificar el patron observable
          o lo que tu quieras.
        </p>
        <p>
          Te invito a probar el ejemplo interactivo, ver su codigo en git y
          repasar la documentacion de estas herramientas
        </p>
        <div className="linksContainer">
          <LinkCard
            link="https://github.com/MartinMaffei95/observable_example"
            label="Ejempo Redux Observable - Repositorio"
            icon={<AiFillGithub size="3rem" />}
            color="#ffffff"
          />
          <LinkCard
            link="https://observable-example.vercel.app/"
            label="Ejempo Redux Observable - Deploy"
            icon={<AiFillRocket size="3rem" />}
            color="#eb6a07"
          />
          <LinkCard
            link="https://www.linkedin.com/in/martinmaffei95/"
            label="Mi LinkedIn - Martin Maffei"
            icon={<AiFillLinkedin size="3rem" />}
            color="#31a5e8"
          />
          <LinkCard
            link="https://redux-observable.js.org/"
            label="Redux Observable - Documentación"
            icon={<img src="observableIcon.png" alt="redux-observable icon" />}
            color="#fae543"
          />
          <LinkCard
            link="https://rxjs.dev/"
            label="RxJs - Documentación"
            icon={<img src="reduxIcon.png" alt="redux-observable icon" />}
            color="#fae543"
          />
          <LinkCard
            link="https://redux-toolkit.js.org/"
            label="Redux Toolkit - Documentación"
            icon={<img src="rxjsIcon.png" alt="redux-observable icon" />}
            color="#fae543"
          />
        </div>
      </div>
    </Section>
  );
};

export default GoodBye;
