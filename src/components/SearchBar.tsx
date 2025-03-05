"use client"
import { debounce, TextField } from "@mui/material"
import { useRouter } from "next/navigation"

export default function SearchBar() {
    const router = useRouter();
    const debouncedSearchHandler = debounce((e) => {
        router.push(`/?search=${e.target.value.trim()}`)
    }, 300)
    return <TextField className="" type="search" size="small" fullWidth placeholder="search..." onChange={debouncedSearchHandler} />
}