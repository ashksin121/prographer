import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import UpperCard from '../../../Containers/UpperCard/UpperCard';
import Logo from '../../../Assets/Images/logo.png';
import SmallLogo from '../../../Assets/Images/Prographer-Small-Logo.svg';
import BreadCrumbs from '../../Breadcrumbs/Breadcrumbs';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Icon from '@material-ui/core/Icon';
import './ResponsiveDrawer.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: '#FFFFFF', 
    color: '#000000'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },    
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#282461',
    color: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img src={SmallLogo} className="DrawerSmallLogo" alt="SmallLogo" />
        <img src={Logo} className="DrawerLogo" alt="Logo" />
      </div>
      <Divider />
      <List>
        {/* {['Dashboard', 'Photoshoot'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{color: "#FFFFFF"}}>{index % 2 === 0 ? <DashboardIcon /> : <CameraAltIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button key="Dashboard" style={{backgroundColor: "#161153"}}>
            <ListItemIcon style={{color: "#EA4D23"}}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button key="Photoshoot">
            <ListItemIcon style={{color: "#FFFFFF"}}><CameraAltIcon /></ListItemIcon>
            <ListItemText primary="Photoshoot" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
              <div style={{width: "100%"}}>
                <div style={{fontSize: "26px"}}>Posted Shoot</div>
                <BreadCrumbs />
              </div>
          </Typography>
          <div className="IconGroupRight" align="right">
          {/* <i class="fas fa-bell"></i> */}
            <Icon className="IconRight circle-icon-bell"><NotificationsRoundedIcon style={{color: "#000000", margin: "0 2%"}} /></Icon>
            <Icon className="IconRight circle-icon-person"><PersonIcon style={{color: "#000000"}} /></Icon>
            {/* <IconButton className="IconRight"><Icon>add_circle</Icon></IconButton> */}
            <IconButton className="IconRight" style={{fontSize: "19px", color: "#000000"}}>Satyajit<ArrowDropDownIcon style={{color: "#EA4D23"}} /></IconButton>
          </div>
        </Toolbar>
        <Divider />
      </AppBar>
      {/* <Divider /> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <Divider /> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          <UpperCard />
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;