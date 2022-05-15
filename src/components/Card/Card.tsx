import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({children}) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  
  color: #fff !important;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
`;

export default Card;
