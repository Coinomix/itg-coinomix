import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import logoCoinomix from "../../assets/images/coinimix-logo.svg";
import demoUserImage from "../../assets/images/header/demo_user.jpg";
import { SingIn } from "../SingIn";
import { Menu, MenuItem, Avatar, Divider, ListItemIcon, Button, Stack, Container } from "@mui/material";
import { Link } from "gatsby";


export const Header = () => {
  const [isDemoUser, setIsDemoUser] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <Link to="/digital/">
      <button className="header__burger" />
      </Link>
      
      <Link to="/">
        <StaticImage className="coinimix-logo" alt="Coinimix logo" src="../../assets/images/coinimix-logo.svg" />
      </Link>

      {isDemoUser ? (
        <div className="header__user">
          <img className="header__user-photo" src={demoUserImage} alt="Demo user photo" onClick={isDemoUser => setIsDemoUser(!isDemoUser)} />
        </div>
      ) : (
        <div className="header__no-user" onClick={() => setIsDemoUser(true)}></div>
      )}

        {/* <div className="header__no-user" onClick={handleClick}></div> */}

        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Container>
          <Stack spacing={2} direction="row">
            <Button size="small" variant="contained">Sing up</Button>
            <Button size="small" variant="outlined">Sing in</Button>
          </Stack>
        </Container>
        <Divider />
        <MenuItem onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>

        {/* <SingIn 
          show={modalShow}
          onHide={() => setModalShow(false)
          }
        /> */}

        {/* <Offcanvas show={show} onHide={handleClose} scroll>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>`
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
      </Offcanvas> */}
    </header>
  );
};
