import React from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileMenu() {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar src={user?.picture ?? ""} alt={user?.name} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="profile-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
      >
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  ) : null;
}
