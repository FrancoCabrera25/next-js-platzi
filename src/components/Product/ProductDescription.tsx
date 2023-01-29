import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
    description: string;
}
const ProductDescription = ({ description }: Props) => {
    return (
        <>
            <Grid item xs={12}>
                <Typography component='h4' variant='h4'>
                    Descripción
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    component='span'
                    variant='body2'
                    sx={{ textAlign: 'center' }}>
                    {description}
                </Typography>
            </Grid>
        </>
    );
};

export default ProductDescription;
