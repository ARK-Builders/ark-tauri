import {Grid, Box, Typography } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import dummyData from "./mock_tags.json";

interface TaggerProps {
  no_of_boxes: number;
}

export default function Tagger({no_of_boxes}: TaggerProps) {
  const mdN = 12/no_of_boxes;
  return (
    <Box sx={{
      backgroundColor: "grey",
      width: "25%",
      overflowY:"scroll",
    }}>
      <Box sx={{
        margin: '10px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography variant="h6">Sort</Typography>
            <FormControlLabel
              sx={{
                display: 'block',
              }}
              control={
                <Switch
                  // checked={}
                  // onChange={}
                  name="loading"
                  color="primary"
                />
              }
              label=""
            />
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography variant="h6">Kinds</Typography>
            <FormControlLabel
              // sx={{
              //   display: 'block',
              // }}
              control={
                <Switch
                  // checked={}
                  // onChange={}
                  name="loading"
                  color="primary"
                />
              }
              label=""
            />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <SortIcon fontSize="medium" />
          <Typography variant="h6">X</Typography>
        </Box>
      </Box>
      {/* <Typography variant="h1">Hello</Typography> */}
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '10px 10px',
      }}>
        <Grid container spacing={1}>
          {/* map here */}
          {dummyData.map((item, index) => (
            <Grid item xs={12} md={mdN} key={index}>
              <Box sx={{
                // width: "100%",
                // display: 'flex',
                // alignItems: 'center',
                // flexDirection: 'column',
                // height: '15vh',
                // border: '1px solid black',
                // pt: '7px',
                // justifyContent: 'space-between',
                backgroundColor: "blue",
                // padding: "6px 9px",
                borderRadius: "20px",
                // mr: "6px",      
              }}>
                <Typography fontSize="15px" color="white" align="center" margin="3px">{item.tag}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}