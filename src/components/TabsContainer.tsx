"use client"

import { Tab, Tabs } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { QueryParams } from "./Header";
export interface Props {
    setQueryParams: Dispatch<SetStateAction<QueryParams>>;
}
export default function TabsContainer({ setQueryParams }: Props) {
    const [value, setValue] = useState(0);
    const values: Record<number, boolean | ""> = {
        0: "",
        1: false,
        2: true
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setQueryParams(qp => ({ ...qp, is_shop: values[newValue] }));
    };

    return <Tabs variant="fullWidth" value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Personal" />
        <Tab label="Shops" />
    </Tabs>
}