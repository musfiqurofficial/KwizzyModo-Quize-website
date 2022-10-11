import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const TopicContext = createContext([])
const Root = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <TopicContext.Provider value={topics}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicContext.Provider>
    );
};

export default Root;