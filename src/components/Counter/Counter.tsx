import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { increament, decrement } from '@/store/cart/cartSlide';

interface Props {
    currentValue: number;
    maxValue: number;
    // onSetCounter?: (value: number) => void;
    increament: () => void;
    decrement: () => void;
}

const Counter = ({ currentValue, maxValue, increament, decrement }: Props) => {
    // const sumCounter = () => {
    //     if (currentValue < maxValue) {
    //         onSetCounter(currentValue + 1);
    //     }
    // };

    // const minusCounter = () => {
    //     if (currentValue > 1) {
    //         onSetCounter(currentValue - 1);
    //     }
    // };

    return (
        <Box display='flex' alignItems='center'>
            <IconButton onClick={decrement}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>
                {currentValue}
            </Typography>
            <IconButton onClick={increament}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    );
};

export default Counter;
