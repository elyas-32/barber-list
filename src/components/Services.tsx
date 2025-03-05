"use client"
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { API } from '@/lib/data';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { Button, Dialog, List, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { Dispatch, SetStateAction, use, useCallback, useEffect, useState } from 'react';
import { QueryParams } from './Header';
import { type Service, type Services } from '@/lib/definition';
interface Props {
    setQueryParams: Dispatch<SetStateAction<QueryParams>>;
    queryParams: QueryParams,
}
const getServices = async (): Promise<Services> => {
    try {
        const { data } = await axios.get(`${API}/services`, {
            adapter: "fetch",
            fetchOptions: {
                cache: "force-cache"
            }
        })
        return data

    } catch (error) {
        console.log("fetch barbers error: ", error);
        return { results: [] }
    }
}
export default function Services({ setQueryParams, queryParams }: Props) {
    const [open, setOpen] = useState(false);
    const services = queryParams.services;
    const [servicesData, setServicesData] = useState<Service[]>([]);
    useEffect(() => {
        getServices().then(({ results }) => {
            setServicesData(results)
        })
    }, [])
    const handleToggle = (value: string) => () => {
        const currentIndex = services.indexOf(value);
        const newChecked = [...services];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setQueryParams(qp => ({ ...qp, services: newChecked }));
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <div className="flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-hide">
        <Chip icon={<TuneRoundedIcon />} label="SERVICES" variant="outlined" onClick={handleClickOpen} clickable />
        {/* canceled design
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable /> */}
        <Dialog
            open={open}
            onClose={handleClose}>
            <div className='p-4 max-w-96 max-h-96'>
                <Typography variant='h5'>
                    Services
                </Typography>
                <List >
                    {servicesData.map((s) => {
                        return <ListItem
                            key={s.slug}
                            disablePadding
                        >
                            <ListItemButton onClick={handleToggle(s.slug)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={services.includes(s.slug)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={s.title} />
                            </ListItemButton>
                        </ListItem>
                    })}
                </List>
                <div className='flex justify-end'>

                    <Button onClick={handleClose}>submit</Button>
                </div>
            </div>
        </Dialog>
    </div>
}