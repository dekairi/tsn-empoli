import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SrcGallery1 from "../../../assets/poligono.jpg";
import SrcGallery2 from "../../../assets/poligono-2.jpg";
import SrcGallery3 from "../../../assets/poligono-3.jpg";
import SrcGallery4 from "../../../assets/foto-1.jpg";
import SrcGallery5 from "../../../assets/de-carlo-1.jpg";
import {Img} from "../../styled";

const Gallery: FC = () => {

    return (
        <Swiper
            style={{maxHeight: "800px", padding: "0 50px 30px 50px"}}
            spaceBetween={55}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide><Img src={SrcGallery1} alt="Immagine del poligono" /></SwiperSlide>
            <SwiperSlide><Img src={SrcGallery2} alt="Immagine del poligono" /></SwiperSlide>
            <SwiperSlide><Img src={SrcGallery3} alt="Immagine del poligono" /></SwiperSlide>
            <SwiperSlide><Img src={SrcGallery4} alt="Immagine del poligono" /></SwiperSlide>
            <SwiperSlide><Img src={SrcGallery5} alt="Immagine del campione" /></SwiperSlide>
        </Swiper>
    );
}

export default Gallery;
