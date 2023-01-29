import {
    Grid,
} from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

interface Props {
    products: TProduct[];
}

export const ProductList = ({ products = [] }: Props) => {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} key={product.id}>
                    <ProductItem product={product} />
                </Grid>
            ))}
        </Grid>
    );
};
