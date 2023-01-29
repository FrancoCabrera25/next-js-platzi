import { Button, Grid, TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';

export const AddToCart = () => {
    return (
        <Grid container sx={{ marginTop: '45px', width: '100%' }} spacing={1}>
            <Grid item xs={6}>
                <TextField fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Button
                    variant='contained'
                    sx={{
                        height: '100%',
                        color: 'white',
                        backgroundColor: green[900],
                        ':hover': { backgroundColor: green[500] },
                    }}>
                    Agregar al carro
                </Button>
            </Grid>
        </Grid>
    );
};
