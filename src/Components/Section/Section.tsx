import React from 'react';
import { StyledSection } from '../../styled-components';

type Props = {
  children: React.ReactNode;
  title?: string;
  paragraphs_elements?: JSX.Element[] | JSX.Element;
};
const Section = ({ children }: Props) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
