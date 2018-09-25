import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import PollTile from "./PollTile"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

export default class Feed extends Component {
    render() { 
        return (<React.Fragment>
          <Grid container justify="center" spacing={16}>
            {[0, 1, 2,3,4,5].map(value => (
              <PollTile value={value}/>
            ))}
          </Grid><Button variant="extendedFab" style={{position:"absolute",bottom:"20px",right:"20px"}}>
        <Icon>add</Icon>
        Add poll
      </Button></React.Fragment>)
    }
}