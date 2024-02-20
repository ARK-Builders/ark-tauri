'use client'
import { Box, Typography } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState} from 'react';

export default function Sidebar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Box sx={{
      width: "auto",
      backgroundColor: "#5900f5",
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0px 5px 0px',
        margin: '10px 10px',
      }}>
        <ExploreIcon fontSize="medium" sx={{
          margin: '5px',
        }} />
        {openNav &&
          <Typography
            sx={{
              padding: '0px 7px'
            }}
          >Navigate data</Typography>
        }
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0px 5px 0px',
        margin: '10px 10px',
      }}>
        <FolderIcon fontSize="medium" sx={{
          margin: '5px',
        }} />
        {openNav &&
          <Typography
            sx={{
              padding: '0px 7px'
            }}
          >Manage folders</Typography>
        }
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0px 5px 0px',
        margin: '10px 10px',
      }}>
        <SettingsIcon fontSize="medium" sx={{
          margin: '5px',
        }} />
        {openNav &&
          <Typography
            sx={{
              padding: '0px 7px'
            }}
          >Settings</Typography>
        }
      </Box>
    </Box>
  );
}