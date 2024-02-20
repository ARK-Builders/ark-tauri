import { Grid, Box, Typography } from '@mui/material';
import dummyData from "./../mock_data.json";

function shortLabel(label:string) {
  if(label.length < 17) return label;
  const labelpo = label.substring(0, 7);
  const labelpl = label.substring(label.length - 7, label.length);
  return labelpo + "..." + labelpl;
}

interface ExplorerProps {
  no_of_boxes: number;
}

export default function Explorer({no_of_boxes}: ExplorerProps) {
  const mdN = 12/no_of_boxes;
  console.log(mdN); 
  return (
    <Box sx={{
      backgroundColor: "white",
      width: "75%",
      overflowY: "scroll",
    }}>
      <Grid container spacing={2} sx={{
        padding: '15px',
      }}>
        {dummyData.map((item, index) => (
          <Grid item xs={12} md={mdN} key={index}>
            <Box sx={{
              width: "100%",
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              height: '120px',
              border: '1px solid black',
              pt: '7px',
              justifyContent: 'space-between',
            }}>
              <img src={item.imageUrl} alt={shortLabel(item.title)} width="auto" height="85px"></img>
              <Typography fontSize="15px" color="black" align="center" margin="3px">{shortLabel(item.title)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}