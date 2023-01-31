import { useCart } from '@/hooks/useCart'
import { Typography } from '@mui/material'
import React from 'react'

const CartPage = () => {
 const { cart } =  useCart();
  return (
    <div>
      {
        cart.map(item => (
          <div key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          </div>
        ))
      }
      <Typography>Pagina del carro</Typography>
    </div>
  )
}

export default CartPage
