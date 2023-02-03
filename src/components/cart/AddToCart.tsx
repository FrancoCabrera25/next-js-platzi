import { useCart } from '@/hooks/useCart';
import { Button, Grid, TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';

interface Props {

    product: TProduct;
}
export const AddToCart = ({ product }: Props) => {
     const { addProducToCart }  = useCart();
    return (
        <Grid container sx={{ marginTop: '45px', width: '100%' }} spacing={1}>
            {/* <Grid item xs={6}>
                <TextField fullWidth />
            </Grid> */}
            <Grid item xs={6}>
                <Button
                onClick={() => addProducToCart(product)}
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
