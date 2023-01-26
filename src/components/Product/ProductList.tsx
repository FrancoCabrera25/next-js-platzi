import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import React from 'react';

interface Props {
    products: TProduct[];
}

export const ProductList = ({ products = [] }: Props) => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} key={product.id}>
                    <Card>
                    <CardMedia component='img' src={product.image} width='100%' height={350} />
                        <CardContent>
                            <Typography variant='subtitle1' color='text.secondary'>
                               {product.name}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label='add to favorites'>
                            
                            </IconButton>
                            <IconButton aria-label='share'>
                     
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            {/* <Grid item xs={12} sm={6}>
                <Card>PEPE</Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>pepe2</Card>
            </Grid> */}
        </Grid>
    );
};
