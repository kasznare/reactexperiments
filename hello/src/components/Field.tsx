import { Box, Tooltip } from "@mui/material";
import React from "react";

interface HeatMapFieldProps {
    value: number | string | null;
    background: string | null;
    style: React.CSSProperties;
    // valueFormatter: (value: number | string | null) => string;
}
export default function HeatMapField(props: HeatMapFieldProps) {

    return (
        <>
            <Tooltip title={props.value}>
            <Box style={props.style} sx={{backgroundColor: props.background ? props.background : 'white', textAlign:'right' }}>
                {props.value}
            </Box>
            </Tooltip>
        </>
    )
}