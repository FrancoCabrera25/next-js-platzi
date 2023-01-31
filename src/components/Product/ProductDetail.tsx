import React from 'react';
import {
    CardMedia,
    Grid,
    Box,
    Typography,
} from '@mui/material';
import ProductDescription from './ProductDescription';
import { ProductAttributes } from './ProductAttributes';
import { AddToCart } from '../cart/AddToCart';

interface Props {
    product: TProduct;
}

const ProductDetail = ({ product }: Props) => {
    return (
        <Grid container spacing={4} sx={{ margin: { sm: '5px' } }}>
            <Grid item xs={12} sm={4}>
                <CardMedia
                    component='img'
                    src={product.image}
                    width={250}
                    height={250}
                    sx={{ borderRadius: { xs: '20px', sm: '5%' } }}
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='flex-start'>
                    <Typography variant='h4'> {product.name}</Typography>
                    <Typography variant='h6'> {product.price}</Typography>
                </Box>
                <AddToCart product= {product} />
            </Grid>
            <ProductDescription description={product.attributes.description} />
            <ProductAttributes attributes={product.attributes} />
        </Grid>
    );
};

export default ProductDetail;
