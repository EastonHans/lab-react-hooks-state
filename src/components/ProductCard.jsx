import React from 'react'
import styles from '../styles/ProductCard.module.css'
import { Button } from '@mui/material'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <Button 
        variant="outlined"
        disabled={!product.inStock}
        onClick={() => onAddToCart(product)}
        data-testid={'product-' + product.id}
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
