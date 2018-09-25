import React, { Component } from 'react';
import {List, ListItem,ListItemIcon,ListItemText,Icon} from "@material-ui/core"

export default class Sidebar extends Component {
    render() { 
        return (    
        <List component="nav">
        <ListItem button>
          <ListItemIcon><Icon>add</Icon>
          </ListItemIcon>
          <ListItemText primary="Test 0" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Icon>inbox</Icon>
          </ListItemIcon>
          <ListItemText primary="Test 1" />
        </ListItem>
      </List>
        )
    }
}