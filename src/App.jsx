import {Button, AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import { Menu as MenuIcon } from '@material-ui/icons'


function App() {
  return (
    <div> 
      <Button variant="text" color="primary">
        color
      </Button>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
