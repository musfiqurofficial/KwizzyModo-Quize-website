import React, { useContext } from 'react';
import { Content } from './Home/Content';
import { HeroArea } from './Home/HeroArea';
import { TopicContext } from './Root';
import { TopicData } from './TopicData';

const Home = () => {
    const topics = useContext(TopicContext)
    return (
        <div className='bg-gray-200'>
            <HeroArea></HeroArea>
            <div className='bg-gray-900 p-10'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-9/12 mx-auto">
                    {
                        topics.map(topic => <TopicData
                            key={topic.id}
                            topic={topic}
                        ></TopicData>)
                    }
                </div>
            </div>
            <Content></Content>
        </div>
    );
};

export default Home;