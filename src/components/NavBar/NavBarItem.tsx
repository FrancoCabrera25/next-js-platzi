import { IMenuItem } from '@/interface/menu-interface';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Props {
    items: IMenuItem[];
}

const NavBarItem = ({ items }: Props) => {
    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {items.map(({ title, path }) => (
                <Link
                    href={path}
                    passHref
                    key={title}
                    style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: '#fff' }}>{title}</Button>
                </Link>
            ))}
        </Box>
    );
};

export default NavBarItem;
