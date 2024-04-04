import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import MainSwiper from './components/MainSwiper';
import ItemList from './components/ItemList';

const Main = () => {
    return (
        <>
            <Header />
            <MainSwiper />
            <ItemList />
            <Footer />
        </>
    );
};

export default Main;
