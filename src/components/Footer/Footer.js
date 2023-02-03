import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Link, useMediaQuery} from '@material-ui/core';

import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MapIcon from '@mui/icons-material/Map';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FeedIcon from '@mui/icons-material/Feed';
import ledgerIcon from '../../assets/img/ledger.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    color: '#fcfcfc',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    borderRadius: '6px',
  },
}));

const Footer = () => {
  const screenSM = useMediaQuery('(max-width:600px)');

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between" alignItems="center" style={{padding: '10px 30px'}}>
        <Grid item xs={12} style={{marginBottom: '20px'}}>
          <Grid container spacing={3} justifyContent="space-between" style={{padding: '0 10px'}}>
            <Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a
                  href="https://grape-finance.gitbook.io/grape-finance-docs/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <ImportContactsIcon style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item>Docs</Grid>
                  </Grid>
                </a>
              </div>
            </Grid>
            <Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a
                  href="https://grape-finance.gitbook.io/grape-finance-docs/protocol/contracts"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <FeedIcon style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item>Contracts</Grid>
                  </Grid>
                </a>
              </div>
            </Grid>
            <Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a
                  href="https://www.youtube.com/channel/UCaArraLhGOOzR1vZKr4y4Tw"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <YouTubeIcon style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item>Education</Grid>
                  </Grid>
                </a>
              </div>
            </Grid>
            <Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a
                  href="https://shop.ledger.com/?r=ba80c2f11e62"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <img
                        src={ledgerIcon}
                        style={{verticalAlign: 'text-bottom'}}
                        alt="Buy Ledger"
                        width={22}
                        height={22}
                      />
                    </Grid>
                    <Grid item>Buy Ledger</Grid>
                  </Grid>
                </a>
              </div>
            </Grid>
            {/*<Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a href="/roadmap" style={{textDecoration: 'none', color: 'inherit'}}>
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <MapIcon style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item>Roadmap</Grid>
                  </Grid>
                </a>
              </div>
            </Grid>

            <Grid item>
              <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                <a
                  href="https://shop.grapefinance.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item>
                      <StorefrontIcon style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item>Merch</Grid>
                  </Grid>
                </a>
              </div>
  </Grid>*/}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{textAlign: screenSM ? 'center' : 'left'}}>
          {'Copyright © '}
          <Link color="inherit" href="/">
            Grape Finance
          </Link>{' '}
          {new Date().getFullYear()}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} justifyContent={screenSM ? 'center' : 'flex-end'} alignItems="center">
            <Grid item>
              <a href="https://discord.gg/grapefinance" rel="noopener noreferrer" target="_blank">
                <IconDiscord style={{fill: '#fff', width: '50px', transform: 'scale(0.6)'}} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.youtube.com/channel/UCaArraLhGOOzR1vZKr4y4Tw"
                rel="noopener noreferrer"
                target="_blank"
              >
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
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
