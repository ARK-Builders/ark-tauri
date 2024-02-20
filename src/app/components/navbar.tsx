import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Root folder &gt;name&gt; seleted
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* Add your icons here */}
            <IconButton color="inherit">
              {/* Your Icon 1 */}
            </IconButton>
            <IconButton color="inherit">
              {/* Your Icon 2 */}
            </IconButton>
            <IconButton color="inherit">
              {/* Your Icon 3 */}
            </IconButton>
            <IconButton color="inherit">
              {/* Your Icon 4 */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
