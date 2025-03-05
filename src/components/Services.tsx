"use client"
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { Button, Dialog, List, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useState } from 'react';

export default function Services() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <div className="flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-hide">
        <Chip icon={<TuneRoundedIcon />} label="SERVICES" variant="outlined" onClick={handleClickOpen} clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Chip label="hair cut" variant="outlined" clickable />
        <Dialog
            open={open}
            onClose={handleClose}>
            <div className='p-4 max-w-96 max-h-96'>
                <Typography variant='h5'>
                    Services
                </Typography>
                <List >
                    <ListItem
                        disablePadding>
                        <ListItemButton dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={`Line item ${1}`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding>
                        <ListItemButton dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={`Line item ${1}`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding>
                        <ListItemButton dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={`Line item ${1}`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding>
                        <ListItemButton dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={`Line item ${1}`} />
                        </ListItemButton>
                    </ListItem>

                </List>
                <div className='flex justify-end'>

                <Button onClick={handleClose}>submit</Button>
                </div>
            </div>
        </Dialog>
    </div>
}