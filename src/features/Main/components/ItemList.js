import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import TopButton from '../../../images/btn-top.png';
import WonSymbol from '../../../images/symbol-won.png';
import CustomImage1 from '../../../images/product/product-earing-1.jpg';
import CustomImage2 from '../../../images/product/product-earing-2.jpg';
import CustomImage3 from '../../../images/product/product-necklace1.jpg';
import CustomImage4 from '../../../images/product/product-necklace2.jpg';
import '../../../styles/ItemList.css';

const ItemList = () => {
    const [imageList] = useState([CustomImage1, CustomImage2, CustomImage3, CustomImage4]);
    const [itemInfoList] = useState([
        { category: 'Product Category 1', price: '10,000' },
        { category: 'Product Category 2', price: '20,000' },
        { category: 'Product Category 3', price: '30,000' },
        { category: 'Product Category 4', price: '40,000' },
    ]);
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3" className="Mainproduct">
                        Best Item
                    </Typography>
                    <Grid container spacing={4}>
                        {imageList.map((image, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Card className="item-card">
                                    <div className="item-image">
                                        <img src={image} alt={`Custom Image ${index + 1}`} />
                                    </div>
                                </Card>
                                <div className="item-info">
                                    <Typography
                                        variant="subtitle1"
                                        component="h3"
                                        className="product-category"
                                    >
                                        {itemInfoList[index].category}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <img src={WonSymbol} alt="symbol" className="symbol-won" />
                                        {itemInfoList[index].price}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" className="Mainproduct">
                        New Item
                    </Typography>
                    <Grid container spacing={4}>
                        {imageList.map((image, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Card className="item-card">
                                    <div className="item-image">
                                        <img src={image} alt={`Custom Image ${index + 1}`} />
                                    </div>
                                </Card>
                                <div className="item-info">
                                    <Typography
                                        variant="subtitle1"
                                        component="h3"
                                        className="product-category"
                                    >
                                        {itemInfoList[index].category}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <img src={WonSymbol} alt="symbol" className="symbol-won" />
                                        {itemInfoList[index].price}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {showButton && (
                <Button onClick={scrollToTop} className="scroll-top-button">
                    <img src={TopButton} alt="top" />
                </Button>
            )}
        </Container>
    );
};

export default ItemList;
