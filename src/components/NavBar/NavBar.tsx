import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Avocado from '../SVGIcons/Avocado';
import Link from 'next/link';
import NavBarItem from './NavBarItem';

const navItems = [
    {
        title: 'Carrito',
        path: '/cart',
    },
];

//['Home', 'About', 'Contact'];

interface Props {
    handleDrawerToggle: () => void;
}

const NavBar: React.FC<Props> = ({ handleDrawerToggle }: Props) => {
    return (
        <AppBar component='nav'>
            <Container>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        sx={{ width: '100%' }}>
                        <Box>
                            <Link href='/' passHref>
                                <Avocado />
                            </Link>
                        </Box>

                        <NavBarItem items={navItems} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
