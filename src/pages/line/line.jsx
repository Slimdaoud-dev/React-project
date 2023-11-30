import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
// eslint-disable-next-line react/prop-types
const Line = ({ isDashboard = false }) => {
  const data = [
    {
      id: "japan",
      color: "hsl(108, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 158,
        },
        {
          x: "helicopter",
          y: 9,
        },
        {
          x: "boat",
          y: 175,
        },
        {
          x: "train",
          y: 47,
        },
        {
          x: "subway",
          y: 60,
        },
        {
          x: "bus",
          y: 55,
        },
        {
          x: "car",
          y: 138,
        },
        {
          x: "moto",
          y: 174,
        },
        {
          x: "bicycle",
          y: 198,
        },
        {
          x: "horse",
          y: 126,
        },
        {
          x: "skateboard",
          y: 30,
        },
        {
          x: "others",
          y: 49,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(187, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 74,
        },
        {
          x: "helicopter",
          y: 50,
        },
        {
          x: "boat",
          y: 57,
        },
        {
          x: "train",
          y: 102,
        },
        {
          x: "subway",
          y: 82,
        },
        {
          x: "bus",
          y: 128,
        },
        {
          x: "car",
          y: 116,
        },
        {
          x: "moto",
          y: 5,
        },
        {
          x: "bicycle",
          y: 215,
        },
        {
          x: "horse",
          y: 149,
        },
        {
          x: "skateboard",
          y: 299,
        },
        {
          x: "others",
          y: 256,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(218, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 271,
        },
        {
          x: "helicopter",
          y: 148,
        },
        {
          x: "boat",
          y: 103,
        },
        {
          x: "train",
          y: 72,
        },
        {
          x: "subway",
          y: 275,
        },
        {
          x: "bus",
          y: 39,
        },
        {
          x: "car",
          y: 108,
        },
        {
          x: "moto",
          y: 203,
        },
        {
          x: "bicycle",
          y: 256,
        },
        {
          x: "horse",
          y: 251,
        },
        {
          x: "skateboard",
          y: 162,
        },
        {
          x: "others",
          y: 221,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(86, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 110,
        },
        {
          x: "helicopter",
          y: 20,
        },
        {
          x: "boat",
          y: 214,
        },
        {
          x: "train",
          y: 141,
        },
        {
          x: "subway",
          y: 242,
        },
        {
          x: "bus",
          y: 21,
        },
        {
          x: "car",
          y: 114,
        },
        {
          x: "moto",
          y: 182,
        },
        {
          x: "bicycle",
          y: 154,
        },
        {
          x: "horse",
          y: 56,
        },
        {
          x: "skateboard",
          y: 251,
        },
        {
          x: "others",
          y: 87,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(285, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 170,
        },
        {
          x: "helicopter",
          y: 5,
        },
        {
          x: "boat",
          y: 89,
        },
        {
          x: "train",
          y: 152,
        },
        {
          x: "subway",
          y: 255,
        },
        {
          x: "bus",
          y: 157,
        },
        {
          x: "car",
          y: 64,
        },
        {
          x: "moto",
          y: 293,
        },
        {
          x: "bicycle",
          y: 196,
        },
        {
          x: "horse",
          y: 26,
        },
        {
          x: "skateboard",
          y: 148,
        },
        {
          x: "others",
          y: 296,
        },
      ],
    },
  ];

  // Filtrer les données pour inclure uniquement la Norvège
  const norwayData = data.filter((item) => item.id === "norway");

  return (
    <Box sx={{ height: isDashboard ? "280px" : "90%" }}>
      <ResponsiveLine
        data={norwayData} // Utiliser les données de la Norvège
        margin={{ top: 50, right: 85, bottom: 50, left: 35 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
