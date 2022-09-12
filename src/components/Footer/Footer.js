import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Typography, Link, Box} from '@material-ui/core';

import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
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
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <div
            style={{
              borderRadius: '5px',
              backgroundImage: 'linear-gradient(144deg, rgba(147, 9, 147, 0.2), rgba(120, 19, 120, 0.2) 50%, rgba(230, 71, 230, 0.5))',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="space-evenly" alignItems="center">
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
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
