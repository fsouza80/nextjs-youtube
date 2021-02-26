import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Hidden, IconButton, InputBase, Paper } from '@material-ui/core';
import { AccountCircle, Apps, MoreVert, VideoCall } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default
  },
  logo: {
    cursor: "pointer",
    height: 18,
    marginLeft: theme.spacing(3)
  },
  toolbar: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 35,
    width: 700
  },
  input:{
    flex:1,
  },
  icons: {

  }
}));

function TopBar() {

  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems= "center">
          <MenuIcon />
          <img src="/logo_youtube.png" alt="logo" className={classes.logo} />
        </Box>
        <Box>
          <Hidden mdDown>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search google maps"}}
              />
              <IconButton
                type="submit"
                aria-label="search"
              > 
                <SearchIcon/>
              </IconButton>
            </Paper>
          </Hidden>
        </Box>
        <Box display='flex'>
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            color="secondary"
            component ="a"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;