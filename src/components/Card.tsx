import { Barber } from "@/lib/definition";
import { Chip, Rating, Typography } from "@mui/material";
import Image from "next/image";

export default function Card({ barber: b }: { barber: Barber }) {
    return <div className="grid grid-cols-[minmax(0,100px)_1fr] x rounded-sm p-2 border border-[#bdbdbd] gap-2">
        <div className="rounded-sm size-full overflow-hidden relative object-cover ">
            <Image src={b.avatar} alt={b.fullname} className="object-cover bg-[#bdbdbd]" fill/>
        </div>
        <div className="flex flex-col justify-between gap-1.5 w-full">
            <div className="flex items-center justify-between w-full">
                <Typography variant="h5">{b.fullname}</Typography>
                <div className="flex items-center ">
                    <Rating value={b.rate} readOnly size="small" /><span className="text-sm">({b.reviews_count})</span>
                </div>
            </div>
            <div>
                <Typography variant="body2" className="text-sm">{b.address}</Typography>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
                {
                    b.services.map((s,i) => {
                        return <Chip label={s} size="small" key={i} />
                    })
                }
            </div>
        </div>
    </div>
}