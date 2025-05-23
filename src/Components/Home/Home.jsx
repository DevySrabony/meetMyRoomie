import React from 'react';
import Banner from './Banner';
import FeaturedRoommates from './FeaturedRoommates';
import HowItWorks from './HowItWorks';
import HeroTyping from './HeroTyping';
import WhyChooseUs from './WhyChooseUs';
import RoommateTips from './RoommateTips';
import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div>
            <div className="py-10 bg-orange-50">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-orange-500">🏡 Roommate Finder Highlights</h2>
            
            <Marquee pauseOnHover speed={50} gradient={false} className="text-lg font-medium text-gray-700">
                <div className="mx-10">✨ Affordable rooms available now in Dhaka!</div>
                <div className="mx-10">📣 Pet-friendly shared spaces in Gulshan</div>
                <div className="mx-10">🚗 Parking included for selected listings</div>
                <div className="mx-10">🔥 1BHK apartments starting at just 5,000 BDT</div>
                <div className="mx-10">🕊️ Peaceful neighborhoods for early birds and night owls</div>
            </Marquee>
            </div>
            <Banner></Banner>
            <FeaturedRoommates></FeaturedRoommates>
           <div className='bg-orange-400 p-28'>
             <h1 className='text-5xl text-white text-center'>A roommate finder for wherever you may go.</h1>
           </div>
           <HowItWorks></HowItWorks>
           <HeroTyping></HeroTyping>
           <WhyChooseUs></WhyChooseUs>
           <RoommateTips></RoommateTips>
        </div>
    );
};

export default Home;

