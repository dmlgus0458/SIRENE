import React from 'react';
import Header from '../../layout/Header';
import MainSwiper from './components/MainSwiper';
import ItemList from './components/ItemList';
const Main = () => {
    return (
        <>
            <Header />
            <MainSwiper />
            <ItemList />
        </>
    );
};

export default Main;
