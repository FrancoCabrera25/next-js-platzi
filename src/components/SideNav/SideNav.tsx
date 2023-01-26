import { IMenuItem } from '@/interface/menu-interface';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Props {
    items: IMenuItem[];
    drawerWidth?: number;
    isOpen: boolean;
    window?: () => Window;

    handleDrawerToggle: () => void;

}

const SideNav = ({  items, isOpen, drawerWidth = 240, window, handleDrawerToggle }: Props) => {

    const container =
    window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {items.map(({ title, path }) => (
                    <ListItem key={title} disablePadding>
                        <Link href={path} passHref  style={{ textDecoration: 'none' }}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={title} />
                        </ListItemButton>
                        </Link>
                   
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box component='nav'>
            <Drawer
                container={container}
                variant='temporary'
                open={isOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}>
                {drawer}
            </Drawer>
        </Box>
    );
};

export default SideNav;
