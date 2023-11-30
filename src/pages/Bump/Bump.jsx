import React from 'react';
import { Box } from '@mui/material';
import { ResponsiveBump } from '@nivo/bump';

const data = [
  {
    "id": "Zaineb",
    "data": [
      {
        "x": 2019,
        "y": 12
      },
      {
        "x": 2020,
        "y": 1
      },
      {
        "x": 2021,
        "y": 4
      },
      {
        "x": 2022,
        "y": 11
      },
      {
        "x": 2023,
        "y": 9
      }
    ]
  },
  {
    "id": "Slim",
    "data": [
      {
        "x": 2019,
        "y": 7
      },
      {
        "x": 2020,
        "y": 7
      },
      {
        "x": 2021,
        "y": 11
      },
      {
        "x": 2022,
        "y": 12
      },
      {
        "x": 2023,
        "y": 2
      }
    ]
  },
  {
    "id": "Hamza",
    "data": [
      {
        "x": 2019,
        "y": 6
      },
      {
        "x": 2020,
        "y": 8
      },
      {
        "x": 2021,
        "y": 5
      },
      {
        "x": 2022,
        "y": 10
      },
      {
        "x": 2023,
        "y": 1
      }
    ]
  },
  {
    "id": "Mohamed",
    "data": [
      {
        "x": 2019,
        "y": 1
      },
      {
        "x": 2020,
        "y": 3
      },
      {
        "x": 2021,
        "y": 7
      },
      {
        "x": 2022,
        "y": 7
      },
      {
        "x": 2023,
        "y": 3
      }
    ]
  },
  {
    "id": "Bilel",
    "data": [
      {
        "x": 2019,
        "y": 10
      },
      {
        "x": 2020,
        "y": 12
      },
      {
        "x": 2021,
        "y": 3
      },
      {
        "x": 2022,
        "y": 7
      },
      {
        "x": 2023,
        "y": 7
      }
    ]
  },
  // ... D'autres séries de données
];

const MyResponsiveBump = () => {
  const selectedData = data.slice(0, 5);  // Utilisez les 5 premières séries de données

  return (
    <Box sx={{ height: "75vh"  , mr : 0}}>
      <ResponsiveBump
        data={selectedData}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </Box>
  );
};

export default MyResponsiveBump;
