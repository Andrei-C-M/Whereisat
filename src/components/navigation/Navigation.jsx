import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EventApp
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
  anchor="left"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  transitionDuration={400} // animation
  PaperProps={{
    sx: {
      backgroundColor: '#231F42',
      color: '#fff',
      transition: 'transform 0.4s ease-in-out', 
    },
  }}
>
  <List sx={{ width: 250 }}>
    {[
      { text: 'Home', to: '/' },
      { text: 'Events', to: '/events' },
      { text: 'Tickets', to: '/tickets' },
    ].map((item) => (
      <ListItem
        key={item.text}
        button
        component={Link}
        to={item.to}
        onClick={toggleDrawer(false)}
        sx={{
          textShadow: '2px 2px 0 #F56B9A',
          fontSize: '1.25rem', 
          py: 2, 
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateX(8px)',
          },
        }}
      >
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            sx: { color: '#fff' },
          }}
        />
      </ListItem>
    ))}
  </List>
</Drawer>

    </>
  )
}

export default Navigation
