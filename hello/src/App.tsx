import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {MyResponsiveHeatMap} from './components/MyResponsiveHeatMap';
import mydata from './data/mydata';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        {/* stuff
        <MyResponsiveHeatMap data={{mydata}}/> */}
      </Box>
    </Container>
  );
}
