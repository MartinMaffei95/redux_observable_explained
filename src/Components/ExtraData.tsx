import { HiOutlineLightBulb } from 'react-icons/hi';
import { StyledExtraData } from '../styled-components';
import { ReactNode } from 'react';

type ExtraDataType = {
  type?: 'WARNING' | 'ERROR' | 'INFO';
  children: ReactNode;
};
const ExtraData = ({ type = 'INFO', children }: ExtraDataType) => {
  return (
    <StyledExtraData type={type}>
      <div className="icon_container">
        <HiOutlineLightBulb className="icon" />
      </div>
      {children}
    </StyledExtraData>
  );
};

export default ExtraData;
