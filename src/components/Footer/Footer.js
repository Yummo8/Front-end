import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography, Link, Card} from '@material-ui/core';

import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" style={{padding: '20px'}}>
        <Grid item xs={12} sm={8} md={6}>
          <Card
            style={{
              backgroundImage: 'linear-gradient(140deg, #930993, #781278 50%, #e647e6)',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="center" spacing={3} alignItems="center" style={{paddingTop: '3px'}}>
              <Grid item>
                <Typography variant="body2" color="#fff" align="center">
                  {'Copyright © '}
                  <Link color="inherit" href="/">
                    Grape Finance
                  </Link>{' '}
                  {new Date().getFullYear()}
                </Typography>
              </Grid>
              <Grid item>
                <a href="https://discord.gg/grapefinance" rel="noopener noreferrer" target="_blank">
                  <IconDiscord style={{fill: '#fff', width: '50px', transform: 'scale(0.6)'}} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://discord.gg/grapefinance" rel="noopener noreferrer" target="_blank">
                  <YouTubeIcon style={{fill: 'white', width: '50px', transform: 'scale(1.5)'}} />
                </a>
              </Grid>
              <Grid item>
                {' '}
                <a href="https://twitter.com/grape_finance" rel="noopener noreferrer" target="_blank">
                  <IconTwitter style={{fill: '#fff', width: '50px', transform: 'scale(1.0)'}} />
                </a>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
