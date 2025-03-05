"use client"

import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function () {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const values = {
        0: "",
        1: true,
        2: false
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        router.push(`&x=true`)
    };

    return <Tabs variant="fullWidth" value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Personal" />
        <Tab label="Shops" />
    </Tabs>
}