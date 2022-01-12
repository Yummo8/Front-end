import React from 'react';
import styled from 'styled-components';

interface PageHeaderProps {
  icon: React.ReactNode;
  subtitle?: string;
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({icon, subtitle, title}) => {
  return (
    <StyledPageHeader>
      {/* <StyledIcon>{icon}</StyledIcon> */}
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledPageHeader>
  );
};

const StyledPageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  color: '#f9d749';
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const StyledSubtitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export default PageHeader;
