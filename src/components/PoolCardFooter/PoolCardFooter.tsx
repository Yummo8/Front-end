import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

interface PoolCardFooterProps {
  actions: string[];
  links: string[];
}

const PoolCardFooter: React.FC<PoolCardFooterProps> = ({actions, links}) => {
  return (
    <Grid container spacing={1}>
      <Grid item className="card-price-item" xs={12} md={12} lg={12}>
        <Button component={Link} to={links[0]} className="shinyButton" style={{width: '100%', marginTop: '17px'}}>
          {actions[0]}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PoolCardFooter;
