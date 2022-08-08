import React, {useState} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Switch} from 'react-router-dom';

import HomeImage from '../../assets/img/background.jpg';
import {Grid, ListSubheader, ListItemText, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import {List, ListItemButton, Typography} from '@mui/material';

import questions from '../../assets/jsons/questions.json';
import {verify} from 'crypto';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;

const Vinology: React.FC = () => {
  const [completedCount, setCompletedCount] = useState(11);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizSuccess, setQuizSuccess] = useState(false);


  const updateCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompletedCount(e.target.checked === true ? completedCount + 1 : completedCount - 1);
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    const result = verifyAnswer();
    if (!result) {
      alert('WRONG');
    } else {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        userAnswers = [false, false, false, false];
      } else {
        // Finish Quizz
        alert('congrats')
        setQuizSuccess(true)
      }
    }
  };

  let userAnswers = [false, false, false, false];
  const markAnswer = (checked: boolean, answerIndex: number) => {
    userAnswers[answerIndex] = checked;
  };

  const verifyAnswer = (): boolean => {
    let isValid = true;
    userAnswers.forEach((userAnswer, index) => {
      const answer = questions[currentIndex].answers[index];
      if (userAnswer !== answer.correct) {
        isValid = false;
      }
    });
    return isValid;
  };

  return (
    <Switch>
      <Page>
        <BackgroundImage />
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Typography color="white" align="center" variant="h3" gutterBottom>
              Vinology
            </Typography>
            <Typography color="white" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
              Learn more about Grape Finance, our best practices, strategies and how to maximum your returns.
            </Typography>

            <List
              style={{color: 'white'}}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography color="#e647e6" variant="h5">
                    Course Outline
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="1. Intro to Grape Finance" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="2. Seigniorage Basics" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="3. Liquidity" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="4. Vineyard" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="5. Winery" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="6. Features" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="7. Strategies" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="8. Utility" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="9. Getting Started" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="10. Links" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="11. Partnerships" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="12. Final Quiz" />
              </ListItemButton>
            </List>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              1. Intro to Grape Finance
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. A message from Grape Finance
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Grape questionnaire
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. The Vision of our Ecosystem
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              2. Seigniorage Basics
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Seigniorage Protocol Methodology Video
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Protocol Tokens and Profits
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              3. Liquidity
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Liquidity Pools video
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Trading Term video
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              4. Vineyard
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Pool allocations video
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              5. Winery
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Staking/Locking Timer
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. TWAP, PEG, EPOCH
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. Debt phase
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Continuation past Wine emissions
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              6. Features
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Nodes - Locked Staking Pools
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. NFTs
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. GBonds - Peg Protection Bonds
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              d. Rebates - Treasury Bonds
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              d. Autocompounders
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              7. Strategies
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Zones
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Profit Taking
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. Peg protection
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              8. Utility
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Lending & Borrowing
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. The Wine Maker Game
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. Partner Games
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              d. Genesis Pools
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              9. Getting Started
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              a. Buying Grape & Wine
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              b. Creating an LP
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              c. Creating a Node
            </Typography>
            <Typography color="white" variant="h6" gutterBottom>
              d. Buying an NFT
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              10. Links
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              11. Partnerships
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={updateCompleted} color="default" />}
                  label="Mark Completed"
                />
              </FormGroup>
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              12. Final Quiz - Complete other sections first {completedCount}
            </Typography>

            {completedCount === 11 && (
              <Grid container direction="column">
                <Grid item>
                  Question {currentIndex + 1}:{questions.length}
                </Grid>
                <Grid item>{questions[currentIndex].questionTitle}</Grid>
                <Grid item>Answers:</Grid>
                <Grid item>
                  {questions[currentIndex].answers.map((answer, answerIndex) => (
                    <React.Fragment key={`${currentIndex}-${answerIndex}`}>
                      <div>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox onChange={(e) => markAnswer(e.target.checked, answerIndex)} color="default" />
                            }
                            label={answer.text}
                          />
                        </FormGroup>
                      </div>
                    </React.Fragment>
                  ))}
                </Grid>
                <Grid item>
                  <button onClick={previous}>Previous</button> |{' '}
                  <button onClick={next}>{currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}</button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Page>
    </Switch>
  );
};

export default Vinology;
function verifyAnswer() {
  throw new Error('Function not implemented.');
}
