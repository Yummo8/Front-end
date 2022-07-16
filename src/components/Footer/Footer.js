import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography, Link} from '@material-ui/core';

import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';
import {ReactComponent as IconGithub} from '../../assets/img/github.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '35px',
    height: '35px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="body2" color="#" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                Grape Finance
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} lg={12} style={{textAlign: 'center', marginTop: '10px'}}>
            <a
              href="https://twitter.com/grape_finance"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <IconTwitter style={{fill: '#fff'}} />
            </a>
            <a
              href="https://github.com/grapefi/contracts"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <IconGithub style={{fill: '#fff', height: '20px'}} />
            </a>
            <a href="https://t.me/GrapeDefi" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconTelegram style={{fill: '#fff', height: '20px'}} />
            </a>
            <a href="https://discord.gg/mZ4QrZwH5M" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconDiscord style={{fill: '#fff', height: '20px'}} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
