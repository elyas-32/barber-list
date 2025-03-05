"use client"

import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
export default function () {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <Tabs variant="fullWidth" value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Personal" />
        <Tab label="Shops" />
    </Tabs>
}