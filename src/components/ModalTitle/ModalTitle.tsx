import React from 'react';
import styled from 'styled-components';

interface ModalTitleProps {
  text?: string;
}

const ModalTitle: React.FC<ModalTitleProps> = ({text}) => <StyledModalTitle>{text}</StyledModalTitle>;

const StyledModalTitle = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: center;
  margin-top: ${(props) => -props.theme.spacing[4]}px;
  text-transform: uppercase;
`;

export default ModalTitle;
