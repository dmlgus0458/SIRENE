import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import '../../../styles/InstagramList.css';
import instaimage1 from '../../../images/product/product-insta1.png';
import instaimage2 from '../../../images/product/product-insta2.png';
import instaimage3 from '../../../images/product/product-insta3.png';
import instaimage4 from '../../../images/product/product-insta4.png';

const InstagramList = () => {
    const [instaImageList] = useState([instaimage1, instaimage2, instaimage3, instaimage4]);

    return (
        <Container maxWidth="lg" className="instagram-container">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3" className="Mainproduct">
                        Instagram
                    </Typography>
                    <Grid container spacing={4}>
                        {instaImageList.map((image, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Paper elevation={3} className="photo-paper">
                                    <img
                                        src={image}
                                        alt={`insta ${index + 1}`}
                                        className="photo-image"
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InstagramList;
