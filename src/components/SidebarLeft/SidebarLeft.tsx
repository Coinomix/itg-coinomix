import * as React from 'react';
import { Link } from "gatsby";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, IconButton, Input, InputAdornment, ThemeProvider, createTheme } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link as GatsbyLink } from 'gatsby';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SidebarLeft() {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickUrl = (url: string) => {
    <GatsbyLink to={`/${url}`} />
  };

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpenSidebar(() => open);
    };

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {title: 'Digital', url: 'digital'}, 
          {title: 'Analytics', url: 'analytics'}, 
          {title: 'Exchange', url: 'exchange'}, 
          {title: 'Directory', url: 'directory'}
        ].map((obj) => (
          <ListItem key={obj.url} disablePadding>
            <ListItemButton>
              <GatsbyLink to={`/${obj.url}`}>
                <ListItemText primary={obj.title} />
              </GatsbyLink>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Test menu" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Submenu" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>
      <Divider />
      <List>
        {[
          {title: 'About us', url: 'about'},
          {title: 'Article Example', url: 'article'},
        ].map((object) => (
          <ListItem key={object.url} disablePadding>
            <ListItemButton>
              <GatsbyLink to={`/${object.url}`}>
                <ListItemText primary={object.title} />
              </GatsbyLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
          <div>
      <button className="header__burger" onClick={toggleDrawer(true)} />

      <Drawer
        open={isOpenSidebar}
        onClose={toggleDrawer(false)}
      >
        <Input
          placeholder="Search..."
          endAdornment={
        <InputAdornment position="end">
          <IconButton>
            {/* <SearchIcon /> */}
          </IconButton>
        </InputAdornment>
      }
    />
        {list()}
      </Drawer>
    </div>
    </ThemeProvider>

  );
}
