//@ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Countdown, {CountdownRenderProps} from 'react-countdown';

interface ProgressCountdownProps {
  base: Date;
  deadline: Date;
  hideBar?: boolean;
  description: string;
}

const ProgressCountdown: React.FC<ProgressCountdownProps> = ({base, deadline, hideBar, description}) => {
  const percentage =
    Date.now() >= deadline.getTime()
      ? 100
      : ((Date.now() - base.getTime()) / (deadline.getTime() - base.getTime())) * 100;

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
    // <Card>
    <>
      <Countdown key={new Date().getTime()} date={deadline} renderer={countdownRenderer} />
      {hideBar ? (
        ''
      ) : (
        <StyledProgressOuter>
          <StyledProgress progress={percentage} />
        </StyledProgressOuter>
      )}
    </>
  );
};

const StyledCountdown = styled.p`
  // font-size: 14px;
  font-weight: 700;
  // color: ${(props) => props.theme.color.grey[100]};
  margin: 0 0 0px 0;
`;

const StyledProgressOuter = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[700]};
`;

const StyledProgress = styled.div<{progress: number}>`
  width: ${(props) => props.progress}%;
  height: 100%;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[100]};
`;

export default ProgressCountdown;
