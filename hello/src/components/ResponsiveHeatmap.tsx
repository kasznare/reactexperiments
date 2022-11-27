// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import { HeatMap, ResponsiveHeatMap } from '@nivo/heatmap'
import React from 'react'
const mydata = [
    {
      "id": "Japan",
      "data": [
        {
          "x": "Train",
          "y": 94747
        },
        {
          "x": "Subway",
          "y": 75125
        },
        {
          "x": "Bus",
          "y": -29357
        },
        {
          "x": "Car",
          "y": 98812
        },
        {
          "x": "Boat",
          "y": -85608
        },
        {
          "x": "Moto",
          "y": 25799
        },
        {
          "x": "Moped",
          "y": -65304
        },
        {
          "x": "Bicycle",
          "y": 58703
        },
        {
          "x": "Others",
          "y": -67256
        }
      ]
    },
    {
      "id": "France",
      "data": [
        {
          "x": "Train",
          "y": 89687
        },
        {
          "x": "Subway",
          "y": -1176
        },
        {
          "x": "Bus",
          "y": 50665
        },
        {
          "x": "Car",
          "y": -24917
        },
        {
          "x": "Boat",
          "y": 34677
        },
        {
          "x": "Moto",
          "y": 40341
        },
        {
          "x": "Moped",
          "y": -65020
        },
        {
          "x": "Bicycle",
          "y": 60249
        },
        {
          "x": "Others",
          "y": 464
        }
      ]
    },
    {
      "id": "US",
      "data": [
        {
          "x": "Train",
          "y": -39787
        },
        {
          "x": "Subway",
          "y": 98567
        },
        {
          "x": "Bus",
          "y": -20115
        },
        {
          "x": "Car",
          "y": -52212
        },
        {
          "x": "Boat",
          "y": 99173
        },
        {
          "x": "Moto",
          "y": -10095
        },
        {
          "x": "Moped",
          "y": 14062
        },
        {
          "x": "Bicycle",
          "y": -41900
        },
        {
          "x": "Others",
          "y": -78397
        }
      ]
    },
    {
      "id": "Germany",
      "data": [
        {
          "x": "Train",
          "y": 13059
        },
        {
          "x": "Subway",
          "y": 42708
        },
        {
          "x": "Bus",
          "y": 27014
        },
        {
          "x": "Car",
          "y": 71690
        },
        {
          "x": "Boat",
          "y": -74459
        },
        {
          "x": "Moto",
          "y": -58972
        },
        {
          "x": "Moped",
          "y": 67861
        },
        {
          "x": "Bicycle",
          "y": -39156
        },
        {
          "x": "Others",
          "y": -88355
        }
      ]
    },
    {
      "id": "Norway",
      "data": [
        {
          "x": "Train",
          "y": 6175
        },
        {
          "x": "Subway",
          "y": 19341
        },
        {
          "x": "Bus",
          "y": -13141
        },
        {
          "x": "Car",
          "y": -47742
        },
        {
          "x": "Boat",
          "y": 3695
        },
        {
          "x": "Moto",
          "y": 24006
        },
        {
          "x": "Moped",
          "y": -38483
        },
        {
          "x": "Bicycle",
          "y": -82803
        },
        {
          "x": "Others",
          "y": -86535
        }
      ]
    },
    {
      "id": "Iceland",
      "data": [
        {
          "x": "Train",
          "y": -90519
        },
        {
          "x": "Subway",
          "y": 40006
        },
        {
          "x": "Bus",
          "y": -55870
        },
        {
          "x": "Car",
          "y": 11833
        },
        {
          "x": "Boat",
          "y": -99500
        },
        {
          "x": "Moto",
          "y": -50361
        },
        {
          "x": "Moped",
          "y": 9047
        },
        {
          "x": "Bicycle",
          "y": 93243
        },
        {
          "x": "Others",
          "y": -85738
        }
      ]
    },
    {
      "id": "UK",
      "data": [
        {
          "x": "Train",
          "y": 84147
        },
        {
          "x": "Subway",
          "y": 6087
        },
        {
          "x": "Bus",
          "y": -14034
        },
        {
          "x": "Car",
          "y": 55887
        },
        {
          "x": "Boat",
          "y": 76458
        },
        {
          "x": "Moto",
          "y": -53395
        },
        {
          "x": "Moped",
          "y": 78576
        },
        {
          "x": "Bicycle",
          "y": 27005
        },
        {
          "x": "Others",
          "y": -80177
        }
      ]
    },
    {
      "id": "Vietnam",
      "data": [
        {
          "x": "Train",
          "y": 75052
        },
        {
          "x": "Subway",
          "y": 1203
        },
        {
          "x": "Bus",
          "y": 76728
        },
        {
          "x": "Car",
          "y": 93244
        },
        {
          "x": "Boat",
          "y": 75824
        },
        {
          "x": "Moto",
          "y": -89714
        },
        {
          "x": "Moped",
          "y": 15514
        },
        {
          "x": "Bicycle",
          "y": 84004
        },
        {
          "x": "Others",
          "y": -93193
        }
      ]
    }
  ];
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveHeatMap = () => (
    <HeatMap
        data={mydata}
        margin={{ top: 60, right: 0, bottom: 0, left: 90 }}
        valueFormat=">-.2s"
        width={200}
        height={200}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'diverging',
            scheme: 'red_yellow_blue',
            divergeAt: 0.5,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
            }
        ]}
    />
)