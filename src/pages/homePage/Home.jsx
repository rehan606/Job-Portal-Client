import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Hire from './Hire';
import MillionsJob from './MillionsJob';
import HotJobs from './HotJobs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotJobs></HotJobs>
            <Categories></Categories>
            <Hire></Hire>
            <MillionsJob></MillionsJob>
        </div>
        
    );
};

export default Home;