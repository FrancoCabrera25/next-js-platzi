import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Props {
    product: TProduct;
}

const ProductItem = ({ product }: Props) => {
    return (
        <Link href={`/product/${product.id}`} passHref   style={{ textDecoration: 'none' }}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardMedia
                        component='img'
                        src={product.image}
                        width='100%'
                        height={350}
                    />
                    <CardContent>
                        <Typography variant='subtitle1' color='text.secondary'>
                            {product.name}
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default ProductItem;
