import { Box,Drawer, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React, { CSSProperties, FC } from 'react'
import HouseIcon from '@mui/icons-material/House';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  drawerWidth: number,
  mobileOpen: boolean,
  handleDrawerTransitionEnd: () => void,
  handleDrawerClose: () => void,
}

interface MenuItem {
  text: string,
  path: string,
  icon: React.ComponentType,
}


const Sidebar: FC<SidebarProps> = ({ drawerWidth, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose }) => {
  const menuItems: MenuItem[] = [
    {
      text: "Home",
      path: "/",
      icon: HouseIcon
    },
    {
      text: "月間レポート",
      path: "/report",
      icon: AutoGraphIcon
    }
  ]
  const baseLinkStyle: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  }
  const activeStyle: CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0.08)'
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <NavLink
            key={item.text}
            to={item.path}
            style={({ isActive }) => {
            return { ...baseLinkStyle, ...(isActive ? activeStyle : {}) }
          }}>
            <ListItem key={item.text} disablePadding>
            <ListItemButton >
              <ListItemIcon>
                {<item.icon /> }
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}

export default Sidebar