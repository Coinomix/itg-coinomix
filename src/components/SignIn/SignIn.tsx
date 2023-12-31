import React from "react";
import { Link } from "gatsby";
import demoUserImage from "../../assets/images/header/demo_user.jpg";
import { Menu, MenuItem, Avatar, Divider, ListItemIcon, Button, Stack, Container, createTheme, ThemeProvider, Modal } from "@mui/material";
import { CustomButton } from "../CustomButton";
import { ButtonType, ModalType } from "../../types/enums";
import { CustomModal } from "../../components/CustomModal";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const SignIn = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalShow, setModalShow] = React.useState<ModalType | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="header__user">
        <img className="header__user-photo" src={demoUserImage} alt="Demo user photo" onClick={handleClick} />
      </div>

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
            <div onClick={() => setModalShow(ModalType.signin)}>
              <CustomButton text="Sign in" type={ButtonType.signin} />
            </div>
            <div onClick={() => setModalShow(ModalType.signup)}>
              <CustomButton text="Sign up" type={ButtonType.signup} />
            </div>
          </Stack>
        </Container>
        <Divider />
        <Stack direction="row" spacing={1}>
          <Avatar
            alt="Cristina Oliveira"
            src={demoUserImage}
            sx={{ width: 56, height: 56 }}
          />
          <span>Cristiana Oliveira</span>
        </Stack>
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

      <CustomModal show={modalShow} onOpen={(type: ModalType) => setModalShow(type)} onHide={() => setModalShow(null)} />

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
    </ThemeProvider>
  );
};
