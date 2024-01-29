import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { BarChart, PieChart } from '@mui/x-charts';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
    primary: {
      main: '#006400', // Dark green
    },
    secondary: {
      main: '#008000', // Lime green
    },
 },
});

export default function BarAnimation() {
 const [itemNb, setItemNb] = React.useState(5);
 const [skipAnimation, setSkipAnimation] = React.useState(false);

 const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
 };

 const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
 const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

 const xLabels = [
   'Page A',
   'Page B',
   'Page C',
   'Page D',
   'Page E',
   'Page F',
   'Page G',
 ];

 const data1 = [
   { label: 'Group A', value: 400 },
   { label: 'Group B', value: 300 },
   { label: 'Group C', value: 300 },
   { label: 'Group D', value: 200 },
 ];
 const data2 = [
   { label: 'A1', value: 100 },
   { label: 'A2', value: 300 },
   { label: 'B1', value: 100 },
   { label: 'B2', value: 80 },
   { label: 'B3', value: 40 },
   { label: 'B4', value: 30 },
   { label: 'B5', value: 50 },
   { label: 'C1', value: 100 },
   { label: 'C2', value: 200 },
   { label: 'D1', value: 150 },
   { label: 'D2', value: 50 },
 ];
 const data = [
 { id: 0, value: 10, label: 'series A' },
 { id: 1, value: 15, label: 'series B' },
 { id: 2, value: 20, label: 'series C' },
];

 return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h6">Bar Chart</Typography>
            <BarChart
              width={500}
              height={300}
              series={[
                {
                 data: pData,
                 label: 'pv',
                 id: 'pvId',
                 yAxisKey: 'leftAxisId',
                },
                {
                 data: uData,
                 label: 'uv',
                 id: 'uvId',
                 yAxisKey: 'rightAxisId',
                },
              ]}
              xAxis={[{ data: xLabels, scaleType: 'band' }]}
              yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
              rightAxis="rightAxisId"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Pie Chart</Typography>
            <PieChart
              series={[
                {
                 innerRadius: 0,
                 outerRadius: 80,
                 data: data1,
                },
                {
                 innerRadius: 100,
                 outerRadius: 120,
                 data: data2,
                },
              ]}
              width={400}
              height={300}
              slotProps={{
                legend: { hidden: true },
              }}
            />
            <Typography variant="h6">Pie Chart 2</Typography>
            <PieChart
              series={[
                {
                 data,
                 highlightScope: { faded: 'global', highlighted: 'item' },
                 faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
              height={200}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
 );
}
