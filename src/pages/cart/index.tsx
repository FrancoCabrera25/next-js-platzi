import Counter from '@/components/Counter/Counter';
import { useCart } from '@/hooks/useCart';
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const CartPage = () => {
    const {
        cart,
        incrementProductToCart,
        decrecrementProductToCart,
        removeProductToCart,
    } = useCart();
    return (
        <Grid container spacing={4} sx={{ margin: { sm: '5px' } }}>
            {cart.map((item: any) => (
                <Grid item xs={12} key={item.id}>
                    <Grid container spacing={6}>
                        <Grid item xs={4} md={2}>
                            <CardMedia
                                sx={{ borderRadius: '5%' }}
                                component='img'
                                src={item.image}
                                width={150}
                                height='auto'
                            />
                        </Grid>
                        <Grid item xs={8} md={10}>
                            <Typography component='h6' variant='h6'>
                                {item.name}
                            </Typography>
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                justifyContent='flex-start'>
                                <Counter
                                    currentValue={item.quantity}
                                    maxValue={10}
                                    increament={() =>
                                        incrementProductToCart(item.id)
                                    }
                                    decrement={() =>
                                        decrecrementProductToCart(item.id)
                                    }
                                />
                                <Typography
                                    component='span'
                                    variant='body1'
                                    sx={{ marginLeft: '20px' }}>
                                    $ {item.price}
                                </Typography>
                                <Button
                                    sx={{ marginLeft: '30px' }}
                                    variant='text'
                                    color='secondary'
                                    onClick={() =>
                                        removeProductToCart(item.id)
                                    }>
                                    Eliminar
                                </Button>
                            </Box>
                            <Box display='flex' justifyContent='flex-start' sx={{ marginTop: '10px'}}>
                                <Typography
                                    component='span'
                                    variant='subtitle1'
                                    >
                                    Subtotal: $ {item.price * item.quantity}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default CartPage;
