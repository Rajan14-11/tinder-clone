
import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from '@mui/material';
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
        alt=""
      />

<IconButton>
      <ForumIcon fontSize="large" className="header__icon" />
</IconButton>
    </div>
  );
}

export default Header