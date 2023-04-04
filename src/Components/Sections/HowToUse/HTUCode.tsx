import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  App_Component,
  Character_Model,
  ReduxState_Model,
  provider_component,
  sliceCharacter_without_observable,
  store_without_observable,
} from '../../../codeStrings';

import { useState, MouseEvent } from 'react';
import { StyledCodeContainer } from '../../../styled-components/CodeContainer.style';
const HTUCode = () => {
  const [section, setSection] = useState<CodeTypes>('STORE');
  type CodeTypes =
    | 'STORE'
    | 'SLICE'
    | 'INTERFACES'
    | 'PROVIDER_COMPONENT'
    | 'APP_COMPONENT';

  const codes = {
    STORE: store_without_observable,
    SLICE: sliceCharacter_without_observable,
    INTERFACES: ReduxState_Model,
    PROVIDER_COMPONENT: Character_Model,
    APP_COMPONENT: App_Component,
  };

  const handleTag = (e: MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget.id);
    const sec = e.currentTarget.id as CodeTypes;
    setSection(sec);
  };

  return (
    <StyledCodeContainer className="codeStringContainer">
      <ul className="tags">
        <li
          id="STORE"
          onClick={(e) => {
            handleTag(e);
          }}
          className={section === 'STORE' ? 'selected' : ''}
        >
          Store
        </li>
        <li
          id="SLICE"
          onClick={(e) => {
            handleTag(e);
          }}
          className={section === 'SLICE' ? 'selected' : ''}
        >
          Slice
        </li>
        <li
          id="INTERFACES"
          onClick={(e) => {
            handleTag(e);
          }}
          className={section === 'INTERFACES' ? 'selected' : ''}
        >
          Typescript
        </li>
        <li
          id="PROVIDER_COMPONENT"
          onClick={(e) => {
            handleTag(e);
          }}
          className={section === 'PROVIDER_COMPONENT' ? 'selected' : ''}
        >
          ProviderComponent
        </li>
        <li
          id="APP_COMPONENT"
          onClick={(e) => {
            handleTag(e);
          }}
          className={section === 'APP_COMPONENT' ? 'selected' : ''}
        >
          AppComponent
        </li>
      </ul>

      <div className="pure_code_container">
        <SyntaxHighlighter language="typescript" style={dracula}>
          {codes[section]}
        </SyntaxHighlighter>
      </div>
    </StyledCodeContainer>
  );
};

export default HTUCode;
