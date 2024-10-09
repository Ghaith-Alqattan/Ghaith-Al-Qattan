import icon1 from '../../assets/SliderAssets/Ellipse 2164.webp'
import icon2 from '../../assets/SliderAssets/Frame 427319602.webp'
import icon3 from '../../assets/SliderAssets/Frame 427319603.webp'
import icon4 from '../../assets/SliderAssets/Frame 427319604.webp'
import icon5 from '../../assets/SliderAssets/pngegg.webp'
import icon6 from '../../assets/SliderAssets/pngegg (1).webp'
import icon7 from '../../assets/SliderAssets/pngwing.com.png'
import icon8 from '../../assets/SliderAssets/Vector.png'
import circles from "../../assets/SliderAssets/Circles.png"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'
import { Autoplay } from 'swiper/modules'

const CustomInfiniteSwiper = () => {
    return (
        <Swiper className='swiper'
            speed={6000}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <img src={circles} alt="" className="circles" />
            <SwiperSlide>
                <img src={icon1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon4} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon5} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="bs" src={icon6} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon7} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={icon8} alt="Slide 4" />
            </SwiperSlide>
        </Swiper>
    )
}

export default CustomInfiniteSwiper
