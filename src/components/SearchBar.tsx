"use client"
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { QueryParams } from "./Header";
export interface Props {
    setQueryParams: Dispatch<SetStateAction<QueryParams>>;
}
export default function SearchBar({ setQueryParams }: Props) {
    return <TextField className="" type="search" size="small" fullWidth placeholder="search..." onChange={(e) => {
        setQueryParams(qp => ({ ...qp, search: e.target.value.trim() }))
    }} />
}