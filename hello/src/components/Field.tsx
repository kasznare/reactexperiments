import { Box } from "@mui/material";
import React from "react";

interface HeatMapFieldProps {
    value: string | null;
    background: number | string | null|undefined;
    // valueFormatter: (value: number | string | null) => string;
}
export default function HeatMapField(props: HeatMapFieldProps) {

    return (
        <>
            <Box sx={{backgroundColor: props.background ? props.background : 'white', textAlign:'right' }}>
                {props.value}
            </Box>
        </>
    )
}