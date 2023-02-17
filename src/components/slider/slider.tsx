
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs } from 'swiper';
import SwiperClass from 'swiper/types/swiper-class';
import AltImage from "./img/altImage.png";
import "./styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useLink } from '../../hooks/use-liink';
import { Book } from '../../redux-saga/book/initial-state';

type Props = {
    item: Book;
}

export const Slider: React.FC<Props> = ({ item }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const length = (item.images.length as number);
    const host = 'https://strapi.cleverland.by'
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    return <div className="swiperWrapper">
        {windowWidth > 1100 &&
            <Swiper data-test-id='slide-big'
                className="mySwiper2"
                thumbs={{ swiper: thumbsSwiper?.destroyed ? null : thumbsSwiper }}
                slidesPerView={1}
                spaceBetween={10}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}

            >
                {item.images.map((image: any) => <SwiperSlide data-test-id='slide-mini' key={image} role="presentation" ><img className="imageTop" src={image.url! ? host + image.url : AltImage} alt="{Image}" /></SwiperSlide>)}

            </Swiper>
        }
        {windowWidth > 1100 && length > 1 && (
            <Swiper
                className="mySwiper"
                onSwiper={(swiper) => {
                    setThumbsSwiper(swiper)
                }}


                spaceBetween={30}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}

                modules={[FreeMode, Navigation, Thumbs]}
            >

                {item.images.map((image: any) => <SwiperSlide data-test-id='slide-mini' key={image} role="presentation" ><img className="imageBottom" src={image.url! ? host + image.url : AltImage} alt="{Image}" /></SwiperSlide>)}

            </Swiper>
        )}

        {windowWidth < 1100 &&
            <Swiper
                data-test-id='slide-big'
                className="mySwiper3"
                spaceBetween={30}
                freeMode={true}
                watchSlidesProgress={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {item.images.map((image: any) => <SwiperSlide data-test-id='slide-mini' key={image} role="presentation" ><img className="imageBottom" src={image.url ? host + image.url : AltImage} alt="{Image}" /></SwiperSlide>)}
            </Swiper>
        }
    </div>

};