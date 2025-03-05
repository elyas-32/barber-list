import { Chip, Rating, Typography } from "@mui/material";
import Image from "next/image";

export default function Card() {
    return <div className="grid grid-cols-[minmax(0,100px)_1fr] x rounded-sm p-2 border border-[#bdbdbd] gap-2">
        <div className="rounded-sm size-full overflow-hidden relative object-cover ">
            <Image src={"/image.png"} alt="x" className="object-cover bg-[#bdbdbd]" fill/>
        </div>
        <div className="flex flex-col justify-between gap-1.5 w-full">
            <div className="flex items-center justify-between w-full">
                <Typography variant="h5">Nigger Haircut</Typography>
                <div className="flex items-center ">
                    <Rating value={3} readOnly size="small" /><span className="text-sm">(5)</span>
                </div>
            </div>
            <div>
                <Typography variant="body2" className="text-sm">Lorem ipsum dolor, sit amet consectetur</Typography>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
                <Chip label="hair cut" size="small" />
                <Chip label="hair cut" size="small" />
                <Chip label="hair cut" size="small" />
                <Chip label="hair cut" size="small" />
                <Chip label="hair cut" size="small" />
            </div>
        </div>
    </div>
}