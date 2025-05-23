import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: 'https://i.postimg.cc/6qwvcsBH/premium-photo-1663957822454-b54ae92a27a9-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg',
      title: 'Smart Roommate Matchmaking',
      subtitle: 'Using preferences and verified profiles to find your ideal living partner.',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/DyCXHxv2/istockphoto-2200503050-612x612.webp',
      title: 'Trusted Listings. Real People.',
      subtitle: 'Every listing is reviewed for accuracy so you can search with confidence.',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/DwY1TYcZ/premium-photo-1680367480804-12033b523184-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg',
      title: 'Connect, Chat, Move In',
      subtitle: 'We make it easy to chat, coordinate, and find your perfect space—fast.',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/SRt5Hpbz/unsplash-image-u-HVRv-Dr7pg.jpg',
      title: 'Why Choose MeetMyRoomie?',
      subtitle: 'Clean design. Real-time data. Smart filtering. Built to simplify your search.',
    },
  ];

  return (
    <div className="my-10 space-y-5">
      <h3 className="text-3xl font-semibold text-orange-400 text-center">
        Find Your Perfect Roommate
      </h3>
      <p className="text-center max-w-xl mx-auto text-gray-600 text-lg">
        MeetMyRoomie is your modern solution for hassle-free roommate discovery and collaboration. Whether you’re looking to fill a room or find a shared space, we make it simple and safe.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-12 py-8">
              <div className="w-full md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500">{slide.title}</h2>
                <p className="mt-4 text-gray-600 text-lg">{slide.subtitle}</p>
                <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                  Explore Listings
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
