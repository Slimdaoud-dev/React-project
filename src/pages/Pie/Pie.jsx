/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Pie = ({ isDashboard = false }) => {
  const navigate = useNavigate();
  const [dataType, setDataType] = useState("clients");
  const clientData = [
    {
      id: "Sfax",
      label: "Sfax",
      value: 50,
      color: "hsl(120, 70%, 50%)",
    },
    {
      id: "Sousse",
      label: "Sousse",
      value: 7,
      color: "hsl(180, 70%, 50%)",
    },
    {
      id: "Tunis",
      label: "Tunis",
      value: 28,
      color: "hsl(240, 70%, 50%)",
    },
    {
      id: "Gabes",
      label: "Gabes",
      value: 5,
      color: "hsl(60, 70%, 50%)",
    },
  ];

  const articleData = [
    {
      id: "A",
      label: "A",
      value: 60,
      color: "hsl(60, 70%, 50%)",
    },
    {
      id: "B",
      label: "B",
      value: 75,
      color: "hsl(320, 70%, 50%)",
    },
   
    {
      id: "C",
      label: "C",
      value: 20,
      color: "hsl(30, 70%, 50%)",
    },
    {
      id: "D",
      label: "D",
      value: 80,
      color: "hsl(400, 70%, 50%)",
    },
  ];

  const dataToDisplay = dataType === "clients" ? clientData : articleData;


  return (
    <Box sx={{ height: isDashboard ? "90%":"75vh"  }}>
    <div style={{ margin: '0 auto',
     width: '160px', display:'flex'}}>
     <div>
     <button type="button" className="btn btn-outline-secondary" style={{marginRight:4}} onClick={() => setDataType("articles") }>Articles</button>
     </div>
     <div>
     <button type="button" className="btn btn-outline-success" onClick={() => setDataType("clients")}>Clients</button>
     </div>
    </div>
  
      <ResponsivePie
        data={dataToDisplay}
        margin={{
          top: 40,
          right: isDashboard ? 10 : 80,
          bottom: 80,
          left: isDashboard ? 10 : 80,
        }}
        animate={true}
        innerRadius={0.5}
        padAngle={1.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={isDashboard ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        motionConfig={{
          mass: 1,
          tension: 500,
          friction: 1,
          clamp: true,
          precision: 0.01,
          velocity: 0,
        }}
        transitionMode="centerRadius"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: isDashboard ? 65 : 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        onClick={isDashboard?() => navigate("/Pie"):null}
        motionConfig="slow"
      />
    </Box>
  );
};

export default Pie;












