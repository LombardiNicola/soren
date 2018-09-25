
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import TopBar from "./TopBar"
import Feed from "./Feed"
import Sidebar from "./Sidebar"

const DRAWER_WIDTH = 320;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff8800" },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="absolute" className={classes.appBar}>
        <TopBar/>
      </AppBar>
      </MuiThemeProvider>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <Sidebar/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Feed/>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
