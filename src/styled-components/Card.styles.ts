import styled from 'styled-components';
import { LinkCard } from '../models';

export const StyledCard = styled('div')`
  display: flex;
  flex-direction: column;
  width: 40vw;

  background-color: color-mix(in srgb, var(--bg-color), #fff 8%);
  border-radius: 2.5%;
  overflow: hidden;

  box-shadow: 5px 5px 9px 5px rgba(0, 0, 0, 0.5);

  .card-image_container {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .card-data_container {
    padding: 0.5rem;
  }
`;

export const StyledLinkCard = styled('div')<LinkCard>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  border: none;
  background: #101010;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.15s ease-in;
  &:hover {
    background: #353535;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) => (props.color ? props.color : '')};
  }

  .iconContainer {
    width: 3rem;
    img {
      width: 100%;
    }
    svg {
      width: 100%;
    }
  }
  .textContainer {
    flex: 1;
  }
`;
