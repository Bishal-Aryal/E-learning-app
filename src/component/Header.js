import React from "react";
import "./Header.css";
import logo from "../assets/logo-udemy.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { BsPatchQuestion } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TbMessageLanguage } from "react-icons/tb";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search....."
        />
        <IconButton>
          <AiOutlineSearch className="header__searchIcon" />
        </IconButton>
      </div>

      <div className="header__navBar">
        <IconButton>
          <div className="header__option">
            <span className="header__optionLineOne">
              <AiOutlineHome className="option__home" />
            </span>
            <span className="header__optionLineTwo">Home</span>
          </div>
        </IconButton>

        <IconButton>
          <div className="header__option">
            <span className="header__optionLineOne">
              <BsBookmarkCheck className="option__learning" />
            </span>
            <span className="header__optionLineTwo">My Learning</span>
          </div>
        </IconButton>

        <IconButton>
          <div className="header__option">
            <span className="header__optionLineOne">
              <BsPatchQuestion className="option__QA" />
            </span>
            <span className="header__optionLineTwo">Q&A</span>
          </div>
        </IconButton>

        <IconButton>
          <div className="header__option">
            <span className="header__optionLineOne">
              <CgProfile className="option__profile" />
            </span>
            <span className="header__optionLineTwo">Profile</span>
          </div>
        </IconButton>

        <IconButton>
          <div className="header__option">
            <span className="header__optionLineOne">
              <TbMessageLanguage className="option__language" />
            </span>
            <span className="header__optionLineTwo">Language</span>
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
