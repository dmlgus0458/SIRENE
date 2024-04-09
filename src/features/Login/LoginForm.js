import React from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import '../../styles/LoginForm.css';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export function LoginForm() {
    return (
        <Container maxWidth="sm">
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                className="login-container"
            >
                <Grid item xs={12}>
                    <Typography className="popup-title" variant="h3" align="center" gutterBottom>
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <form>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <TextField
                                id="email"
                                fullWidth
                                variant="outlined"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <p className="supporting-text">Supporting text</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <TextField
                                id="password"
                                fullWidth
                                variant="outlined"
                                placeholder="Enter your password"
                                type="password"
                            />
                            <p className="supporting-text">Supporting text</p>
                        </div>
                        <Button className="login-button" variant="contained" fullWidth>
                            Login
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" align="center" className="links">
                        <Link className="link-text" href="/find-email" underline="hover">
                            Forgot email
                        </Link>
                        <Link className="link-text" href="/find-password" underline="hover">
                            Forgot password
                        </Link>
                        <Link className="link-text" href="/register" underline="hover">
                            Create account
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <hr className="my-6 border-gray-300" />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <SocialIcon />
                </Grid>
            </Grid>
        </Container>
    );
}

function SocialIcon() {
    return (
        <>
            <GoogleIcon className="social-login-icon" />
            <GitHubIcon className="social-login-icon" />
            <TwitterIcon className="social-login-icon" />
        </>
    );
}
