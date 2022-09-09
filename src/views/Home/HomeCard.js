import React from 'react';
import cx from 'clsx';
import Color from 'color';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/material';
import Button from '@material-ui/core/Button';
import {useCoverCardMediaStyles} from '@mui-treasury/styles/cardMedia/cover';
import {Row, Item} from '@mui-treasury/components/flex';
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles(({palette}) => ({
  root: ({color}) => ({
    borderRadius: '5px',
    // border: '2px solid',
    // borderImageSlice: 1,
    // borderWidth: '5px',
    // borderImageSource: '',
    minHeight: '260px',
    background: `linear-gradient(to bottom, ${Color('#930993').darken(0.3).toString()}, ${Color('#930993')
      .darken(0.4)
      .toString()})`,
  }),
  content: ({color}) => ({
    zIndex: 1,
    borderRadius: '0.5rem',
    bottom: 0,
  }),
  title: {
    transition: '0.3s',
    fontSize: '1.3rem !important',
    margin: 0,
  },
  description: {
    fontSize: '1rem !important',
    color: '#e3e3e3 !important',
    margin: 0,
  },
  logo: {
    transition: '0.3s',
    width: 60,
    borderRadius: '0',
    objectFit: 'contain !important',
  },
  team: {
    // fontFamily: 'Sen',
    fontSize: '0.75rem !imporatant',
    color: '#fff',
  },
}));

const CustomCard = ({item, styles, title, subTitle, brand, subItems}) => {
  return (
    <a style={{textDecoration: 'none'}} target={item.isInternalLink === false ? '_blank' : ''} href={item.linkTo}>
      <Stack
        direction="column"
        className={cx(styles.root, styles.color)}
        style={{backgroundImage:  item.backgroundImage != null ? 'url(' + require('../../assets/img/' + item.backgroundImage) + ')' : ''}}
        justifyContent="space-between"
        spacing={0}
      >
        <Row p={2}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <h1 className={styles.title} style={{color: item.color}}>
                {title}
              </h1>
              <h5 style={{margin: 0, padding: 0}}>{subTitle}</h5>
            </Grid>
            <Grid item>
              <img alt={item.image} className={styles.logo} src={require(`../../assets/img/${item.image}`)} />
            </Grid>
          </Grid>
        </Row>
        <Row px={2}>
          <Item>
            <div className={styles.team}>{brand}</div>
          </Item>
        </Row>
        <Row p={2}>
          {subItems == null && (
            <Item style={{width: '100%'}}>
              <Button
                className="shinyButton"
                style={{width: '100%'}}
                target={item.isInternalLink === false ? '_blank' : ''}
                href={item.linkTo}
              >
                Go to {item.label}
              </Button>
            </Item>
          )}
          {subItems != null && subItems.length > 0 ? (
            <Item>
              <Grid container wrap="wrap" alignItems="stretch" justifyContent="space-evenly" spacing={2}>
                {subItems.map((subItem) => (
                  <Grid item>
                    <Button
                      className="shinyButton"
                      style={{backgroundColor: subItem.color, width: '100% !important'}}
                      target={subItem.isInternalLink === false ? '_blank' : ''}
                      href={subItem.linkTo}
                    >
                      {subItem.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Item>
          ) : null}
        </Row>
      </Stack>
    </a>
  );
};

export const HomeCard = ({item}) => {
  const styles1 = useStyles({color: item.color});
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomCard
        item={item}
        styles={styles1}
        brand={item.description}
        subItems={item.items}
        title={item.label}
        subTitle={item.subLabel}
        description={item.description}
      />
    </Grid>
  );
};

export default HomeCard;

// <Box className={styles.content} p={2}>
//               <Box position={'relative'} zIndex={1}>

//
//
//
//               </Box>
//             </Box>
