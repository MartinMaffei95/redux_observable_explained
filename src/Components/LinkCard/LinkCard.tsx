import React from 'react';
import { StyledLinkCard } from '../../styled-components';

type Props = {
  label: string;
  link: string;
  icon?: React.ReactNode;
  color?: string;
};
const LinkCard = ({ label, link, icon, color }: Props) => {
  const redirect = () => {
    window.open(link, '_blank');
  };

  return (
    <StyledLinkCard color={color} onClick={redirect}>
      <div className="iconContainer">{icon ? icon : null}</div>
      <div className="textContainer">
        <p>{label}</p>
      </div>
    </StyledLinkCard>
  );
};

export default LinkCard;
