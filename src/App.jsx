import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkModeStyles from './styles/DarkMode.module.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={`${darkModeStyles.app} ${darkMode ? darkModeStyles.dark : darkModeStyles.light}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={darkMode} onToggle={toggleDarkMode} />

      <div style={{ margin: '20px 0' }}>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select id="category-filter" value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList selectedCategory={category} onAddToCart={addToCart} />

      <Cart items={cart} />
    </div>
  )
}

export default App
