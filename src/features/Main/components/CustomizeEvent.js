import React from 'react';
import { CardContent, Typography, Button, Grid, Container, Paper } from '@mui/material';
import '../../../styles/CustomizeEvent.css';
import CustomizeEventImage from '../../../images/CustomizeEvent.jpg';

const CustomizeEvent = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={0}>
                <CardContent className="card-container">
                    <Grid container spacing={2} className="card-content">
                        <Grid item xs={12} sm={6} className="image-container">
                            <img
                                src={CustomizeEventImage}
                                alt="Customizing"
                                className="custom-image"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className="text-container">
                            <div className="text-content">
                                <Typography variant="h3" className="title">
                                    Customize Event
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    className="description"
                                >
                                    Choose your Color of Gold
                                </Typography>
                                <Button variant="outlined" className="button">
                                    More View
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Paper>
        </Container>
    );
};

export default CustomizeEvent;
