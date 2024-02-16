import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { BarChart } from '@mui/x-charts'; // Assuming @mui/x-charts provides BarChart
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006400',
    },
    secondary: {
      main: '#008000',
    },
  },
});

export default function BarAnimation() {
  const [chartData, setChartData] = React.useState([]);
  const [idPlotCulture, setIdPlotCulture] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://culture-application.up.railway.app/api/avg-rendement'); // Replace with your API endpoint
        console.log(response);
        const doubleArray = response.data.map(item => [[item.avgYield]]);
        setChartData(doubleArray);
        
        const plotAndCultureData = response.data.map(item => [item.idPlot, item.cultureName]);
        setIdPlotCulture(plotAndCultureData);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12}>
            <Typography variant="h6">Bar Chart</Typography>
            <BarChart
              width={500}
              height={300}
              series={[
                {
                  data: chartData, // Use the fetched data here
                  label: 'Avg yield',
                  id: 'dynamicDataId',
                  yAxisKey: 'leftAxisId',
                },
              ]}
              // xAxis={[{ data: xLabel.map(label => "Plot "+label), scaleType: 'band' }]} // Map data to labels
              xAxis={[{
                data: idPlotCulture.flatMap(subArray => [`Plot ${subArray[0]} ${subArray[1]}`]),
                scaleType: 'band'
              }]}
              
              yAxis={[{ id: 'leftAxisId' }]}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
