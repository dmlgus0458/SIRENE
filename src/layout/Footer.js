// Footer.js
import React from 'react';
import { Container, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import '../styles/Footer.css';
import mainlogo from '../images/logo.png';

const Logo = () => {
    return (
        <div className="footer__logo">
            <Link href="#" color="inherit" underline="none">
                <img src={mainlogo} alt="Logo" className="logo-icon" />
            </Link>
        </div>
    );
};

const Copyright = () => {
    return (
        <div className="footer__copyright">
            본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다. © 2024 Kim, Ui
            Hyun. All Rights Reserved.
        </div>
    );
};

const SocialLinks = () => {
    return (
        <div className="footer__social">
            <Link href="#" color="inherit" underline="none" className="footer__social-link">
                <Facebook fontSize="large" />
            </Link>
            <Link href="#" color="inherit" underline="none" className="footer__social-link">
                <Twitter fontSize="large" />
            </Link>
            <Link href="#" color="inherit" underline="none" className="footer__social-link">
                <Instagram fontSize="large" />
            </Link>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer__container" maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Logo />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Copyright />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SocialLinks />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
