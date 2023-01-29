import { Chip, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
    attributes: TProductAttributes;
}

export const ProductAttributes = ({ attributes }: Props) => {
    const { hardiness, shape, taste } = attributes;
    return (
        <>
            <Grid item xs={12}>
                <Typography component='h5' variant='h5'>
                    Atributos
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Chip
                    label={hardiness}
                    variant='outlined'
                    sx={{ margin: '5px' }}
                />
                <Chip label={shape} variant='outlined' sx={{ margin: '5px' }} />
                <Chip label={taste} variant='outlined' sx={{ margin: '5px' }} />
            </Grid>
        </>
    );
};
