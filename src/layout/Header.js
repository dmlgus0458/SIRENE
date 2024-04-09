import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import mainlogo from '../images/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import LoginPopup from '../features/Login/LoginPopup';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => {
    const [navItems] = useState([
        {
            to: '#',
            label: 'HOME',
        },
        {
            to: '#',
            label: 'PRODUCT',
            subNavItems: [
                { to: '#', label: 'BEST' },
                { to: '#', label: 'NECKLACE' },
                { to: '#', label: 'BRACELET' },
                { to: '#', label: 'RING' },
                { to: '#', label: 'JEWELRY' },
                { to: '#', label: 'ETC' },
            ],
        },
        { to: '#', label: 'ETHICS' },
        { to: '#', label: 'EVENTS' },
        { to: '#', label: 'COMMUNITY' },
    ]);

    const [openPopup, setOpenPopup] = useState(false);
    const [searchMode, setSearchMode] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleSearchIconClick = () => {
        setSearchMode(true);
    };

    const handleCancelSearch = () => {
        setSearchMode(false);
    };

    const handleSearch = () => {
        console.log('검색이 실행됩니다.');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }} className="app-bar">
            <Toolbar className="toolbar">
                {!searchMode ? (
                    <>
                        <Logo />
                        <NavIcons
                            handleOpenPopup={handleOpenPopup}
                            handleSearchIconClick={handleSearchIconClick}
                        />
                        <LoginPopup open={openPopup} handleClose={handleClosePopup} />
                        <Navigation navItems={navItems} />
                    </>
                ) : (
                    <SearchBar onCancelSearch={handleCancelSearch} onSearch={handleSearch} />
                )}
            </Toolbar>
        </AppBar>
    );
};

const Logo = () => {
    return (
        <Box className="logo-box">
            <Link to="/" className="logo-link">
                <img src={mainlogo} alt="Logo" className="logo-icon" />
            </Link>
        </Box>
    );
};

const NavIcons = ({ handleOpenPopup, handleSearchIconClick }) => {
    return (
        <Box className="nav-icons">
            <IconButton className="icon-button" onClick={handleSearchIconClick}>
                <SearchIcon />
            </IconButton>
            <IconButton className="icon-button">
                <NotificationsIcon />
            </IconButton>
            <IconButton className="icon-button" onClick={handleOpenPopup}>
                <PersonIcon />
            </IconButton>
        </Box>
    );
};

const Navigation = ({ navItems }) => {
    return (
        <nav className="navigation">
            {navItems.map((navItem, index) => (
                <NavItem key={index} to={navItem.to} subNavItems={navItem.subNavItems}>
                    {navItem.label}
                </NavItem>
            ))}
        </nav>
    );
};

const NavItem = ({ children, subNavItems, ...props }) => {
    const [showSubNav, setShowSubNav] = useState(false);

    const handleMouseEnter = () => {
        setShowSubNav(true);
    };

    const handleMouseLeave = () => {
        setShowSubNav(false);
    };

    return (
        <div
            className="nav-item-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link {...props} className="nav-item-link">
                {children}
            </Link>
            {showSubNav && subNavItems && (
                <div className="sub-nav-container">
                    {subNavItems.map((item, index) => (
                        <Link key={index} to={item.to} className="sub-nav-item">
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

const SearchBar = ({ onCancelSearch, onSearch }) => {
    return (
        <Box className="search-bar-container">
            <InputBase
                className="search-input"
                placeholder="Search"
                endAdornment={
                    <IconButton className="search-icon" onClick={onSearch}>
                        <SearchIcon />
                    </IconButton>
                }
            />
            <IconButton className="cancel-search-button" onClick={onCancelSearch}>
                <CancelIcon />
            </IconButton>
        </Box>
    );
};

export default Header;
