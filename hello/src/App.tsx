import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { MyResponsiveHeatMap } from './components/ResponsiveHeatMap';
import HeatMapField from './components/Field';
import { fontWeight } from '@mui/system';

export default function App() {
  //to be used as headers
  const businessUnits = [
    {
      businessUnitId: 2,
      businessUnitBuId: "AAA"
    },
    {
      businessUnitId: 1,
      businessUnitBuId: "BBB"
    }
  ];
  //to be used as row data
  const suppliers = [
    {
      supplierId: 1,
      supplierName: "CCCCC",
      businessUnitValues: [
        2,
        3
      ]
    },
    {
      supplierId: 2,
      supplierName: "DDDDD",
      businessUnitValues: [
        1,
        6
      ]
    }
  ];

  //add supplier sum to the end of businessUnitValues
  const newsuppliers = suppliers.map(supplier => {
    return {
      ...supplier,
      supplierSum: supplier.businessUnitValues.reduce((a, b) => a + b, 0)
    }
  }
  );
  const supplierValuesSumByIndexOfBusinessUnitValue = newsuppliers.map(supplier => supplier.businessUnitValues).reduce((a, b) => a.map((x, i) => x + b[i]));
  
  const supplierValuesSum = supplierValuesSumByIndexOfBusinessUnitValue.reduce((a, b) => a + b, 0);
  const supplierValuesMax = Math.max(...supplierValuesSumByIndexOfBusinessUnitValue);
  const supplierValuesMin = Math.min(...supplierValuesSumByIndexOfBusinessUnitValue);

  const maxSupplierValue2 = Math.max(...newsuppliers.map(s => s.supplierSum));
  const minSupplierValue2 = Math.min(...newsuppliers.map(s => s.supplierSum));

  const maxSupplierValue = Math.max(...suppliers.map(s => Math.max(...s.businessUnitValues)));
  const minSupplierValue = Math.min(...suppliers.map(s => Math.min(...s.businessUnitValues)));

  const colorinterpolator = (minValue: number, maxValue: number, value: number): string => {
    const middleValue = (minValue + maxValue) / 2;
    //then we are interpolatin between minColor and middleColor
    if (value <= middleValue) {
      return rgbToHex(Math.floor((value - minValue) / (middleValue - minValue) * 255), 255, 0);
    }
    //then we are interpolating between middleColor and maxColor
    else if (value > middleValue) {
      return rgbToHex(255, Math.floor(255 * (value - maxValue) / (middleValue - maxValue)), 0);
    }
    return rgbToHex(255, 255, 255);
  }

  const componentToHex = (c: number) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <Container maxWidth="sm">
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="0px" gridAutoRows="20px">
        <HeatMapField value={"Supplier name"} background={"#b1f3e7"} style={{ textAlign: 'left', fontWeight: 'bold', width: '100px' }} />
        {businessUnits.map((bu, index) => {
          return (
            <HeatMapField value={bu.businessUnitBuId} background={"#b1f3e7"} style={{ fontWeight: 'bold' }} />
          )
        })}
        <HeatMapField value={"Grand Total"} background={"#b1f3e7"} style={{ fontWeight: 'bold', width: '100px' }} />
      </Box>
      {newsuppliers.map((supplier, index) => {
        return (
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="0px" gridAutoRows="20px">
            <HeatMapField value={supplier.supplierName} background={"#FFFFFF"} style={{ textAlign: 'left', width: '100px' }} />
            {supplier.businessUnitValues.map((buValue, i) => {
              return (
                <HeatMapField value={buValue} background={colorinterpolator(minSupplierValue, maxSupplierValue, buValue)} style={{}} />
              )
            })}
            <HeatMapField value={supplier.supplierSum} background={colorinterpolator(minSupplierValue2, maxSupplierValue2, supplier.supplierSum)} style={{ width: '100px' }} />
          </Box>
        )
      })
      }
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="0px" gridAutoRows="20px">
      <HeatMapField value={"Grand total"} background={"#b1f3e7"} style={{ textAlign: 'left', fontWeight: 'bold', width: '100px' }} />

        {
          supplierValuesSumByIndexOfBusinessUnitValue.map((sum, index) => {
            return (
              <HeatMapField value={sum} background={colorinterpolator(supplierValuesMin, supplierValuesMax, sum)} style={{fontWeight: 'bold'}} />
            )
          })
        }
        <HeatMapField value={supplierValuesSum} background={"#b1f3e7"} style={{ textAlign: 'right', fontWeight: 'bold', width: '100px' }} />
      </Box>

      {/* <Box sx={{ my: 4 }}>
              <MyResponsiveHeatMap />
      </Box> */}
    </Container>
  );
}
