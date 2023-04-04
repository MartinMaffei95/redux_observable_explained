export const provider_component: string = `
//../redux/Provider/ProviderComponent.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

type Props = {
  children: React.ReactNode;
};
const ProviderComponent = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComponent;

`;
