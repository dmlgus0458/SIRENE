import React from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import '../../styles/RegisterForm.css';
const RegisterForm = () => {
    return (
        <Container className="register-container" maxWidth="md">
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Typography variant="h4" className="form-title">
                        Create Account
                    </Typography>
                    <form className="form">
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <TextField
                                id="email"
                                placeholder="Enter your email"
                                type="email"
                                fullWidth
                                className="text-input"
                            />
                            <p className="supporting-text">Supporting text</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <TextField
                                id="password"
                                placeholder="Enter your password"
                                type="password"
                                fullWidth
                                className="text-input"
                            />
                            <p className="supporting-text">Supporting text</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password-confirm">Confirm Password</label>
                            <TextField
                                id="password-confirm"
                                placeholder="Confirm your password"
                                type="password"
                                fullWidth
                                className="text-input"
                            />
                            <p className="supporting-text">Supporting text</p>
                        </div>
                        <Button variant="contained" className="Register-button" fullWidth>
                            Create
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterForm;
