import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import {Card,CardHeader,CardContent,CardActions} from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"

export default class PollTile extends Component {
    render() { 
        return <Grid key={this.props.value} item>
        <Card style={{height:"192px",width:"384px"}}>
        <CardHeader
          avatar={
            <Avatar style={{backgroundColor:"#ff8800"}}>
              S
            </Avatar>
          }
          action={
            <IconButton>
              <Icon >
              more_vert
              </Icon>
            </IconButton>
          }
          title="Poll 1"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography component="p">
            I'm a description
          </Typography>
        </CardContent>
        <CardActions  disableActionSpacing>
          <IconButton >
              <Icon>
            favorite
            </Icon>
          </IconButton>
          <IconButton >
            <Icon >
                share
                </Icon>
          </IconButton>
        </CardActions>
      </Card>
      </Grid>
    }
}