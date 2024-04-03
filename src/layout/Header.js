import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import mainlogo from '../images/logo.png';

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
                { to: '#', label: 'NEW' },
                { to: '#', label: 'BEST' },
                { to: '#', label: 'NECKLACE' },
                { to: '#', label: 'NECKLACE' },
                { to: '#', label: 'NECKLACE' },
            ],
        },
        { to: '#', label: 'ETHICS' },
        { to: '#', label: 'STORE' },
        { to: '#', label: 'COMMUNITY' },
    ]);

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }} className="app-bar">
            <Toolbar className="toolbar">
                <Logo />
                <NavIcons />
                <Navigation navItems={navItems} />
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

const NavIcons = () => {
    return (
        <Box className="nav-icons">
            <IconButton className="icon-button">
                <SearchIcon />
            </IconButton>
            <IconButton className="icon-button">
                <NotificationsIcon />
            </IconButton>
            <IconButton className="icon-button">
                <MenuIcon />
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

export default Header;
