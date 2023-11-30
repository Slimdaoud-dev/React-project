import ReactApexChart from "react-apexcharts";

import { useState } from "react";
import { Switch } from "@headlessui/react";
// eslint-disable-next-line react/prop-types
function ApexChartf({isDashboard = false}) {
  const [enabled, setEnabled] = useState(true);

  const series = [
    {
      name: "Facturesclient",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: "BLclient",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
    {
      name: "Facturesfournisseur",
      data: [
        3.4, 1.55, 0.76, 0.08, 1.1, 2.1, 2.9, 4, 3.9, 4.2, 4, 0.03, 3.01, 3.2,
        4.5, 3.2, 3.5, 3,
      ],
    },
    {
      name: "BLfournisseur",
      data: [
        -1.7, -0.05, -1.86, -1.17, -1.1, -0.2, -2.85, -3.1, -3.96, -1.1, -4.3,
        -4.4, -3.3, -4, -4.1, -2.2, -3.1, -2.8,
      ],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 440,
      stacked: true,
    },
    colors: ["#008FFB", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val * 1000);
        },
      },
    },
    xaxis: {
      categories: [
        "27",
        "28",
        "29",
        "30",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
      ],
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val * 1000));
        },
      },
    },
  };
  let dataToDisplay = [];
  if (enabled) {
    dataToDisplay = [series[0], series[1]];
  } else {
    dataToDisplay = [series[2], series[3]];
  }

  return (
    <div >
      <div style={{ marginLeft: isDashboard ? '40%':'46%'}}>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-green-600 mt-3" : "bg-green-400 mt-3"}
          relative inline-flex h-[38px] w-[134px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-24" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
          {enabled ? (
            <span className="text-white absolute top-1/2 transform -translate-y-1/2 left-8">
              Client
            </span>
          ) : (
            <span className="text-white absolute top-1/2 transform -translate-y-1/2 right-3 left-9">
              Fournisseur
            </span>
          )}
        </Switch>
      </div>
      <div id="chart">
        <ReactApexChart
          // @ts-ignore
          options={options}
          series={dataToDisplay}
          type="bar"
          height={400}
        />
      </div>
    </div>
  );
}

export default ApexChartf;
