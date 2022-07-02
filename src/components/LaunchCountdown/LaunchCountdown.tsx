import React from 'react';
import styled from 'styled-components';
import Countdown, {CountdownRenderProps} from 'react-countdown';


interface LaunchCountdownProps {
  deadline: Date;
  description: string;
  descriptionLink: string;
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({deadline, description, descriptionLink}) => {

  const countdownRenderer = (countdownProps: CountdownRenderProps) => {
    const {days, hours, minutes, seconds} = countdownProps;
    const h = String(days * 24 + hours);
    const m = String(minutes);
    const s = String(seconds);
    return (
      <StyledCountdown>
        {h.padStart(2, '0')}:{m.padStart(2, '0')}:{s.padStart(2, '0')}
      </StyledCountdown>
    );
  };
  return (
    <StyledCard>
        <StyledCountdownWrapper>
          <StyledCountdownTitle>{description}</StyledCountdownTitle>
          <Countdown date={deadline} renderer={countdownRenderer} />
        </StyledCountdownWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin:0 auto;
  background-color: rgba(0,0,0,0.5);
  border: 0px solid ${(props) => props.theme.color.grey[900]};
  box-sizing: border-box;
  padding: 36px;
  border-radius: 48px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledCountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCountdownTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

const StyledCountdown = styled.p`
  font-size: 40px;
  color: #fff;
  margin: 0;
`;


export default LaunchCountdown;
