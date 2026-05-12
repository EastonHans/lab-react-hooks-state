import React from 'react'
import { Button } from '@mui/material'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <Button 
      variant="contained" 
      onClick={onToggle}
      color={isDarkMode ? "secondary" : "primary"}
    >
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  )
}
export default DarkModeToggle
