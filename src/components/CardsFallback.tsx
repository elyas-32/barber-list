import { Box, Skeleton } from "@mui/material"

const CardFallBack = () => {
    return <div className="grid grid-cols-[minmax(0,100px)_1fr] gap-2 p-2 border border-[#bdbdbd] rounded-sm">
        {/* Avatar placeholder */}
        <Skeleton
            variant="rectangular"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
        />
        <div className="flex flex-col justify-between gap-1.5 w-full">
            {/* Header (name and rating) */}
            <div className="flex justify-between items-center">
                <Skeleton variant="text" className="w-1/2" />
                <div className="flex items-center gap-1">
                    <Skeleton variant="text" className="w-[40px]" />
                    <Skeleton variant="text" className="w-[20px]" />
                </div>
            </div>
            {/* Address placeholder */}
            <Skeleton variant="text" className="w-3/4" />
            {/* Services chips placeholders */}
            <div className="flex flex-wrap gap-1">
                <Skeleton variant="text" className="w-[50px]" />
                <Skeleton variant="text" className="w-[50px]" />
                <Skeleton variant="text" className="w-[50px]" />
            </div>
        </div>
    </div>
}
export default function CardsFallBack() {
    return <>
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
        <CardFallBack />
    </>
}