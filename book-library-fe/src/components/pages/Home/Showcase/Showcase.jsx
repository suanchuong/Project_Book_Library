import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Showcase.css';
import useFetch from '../../../../Hooks/useFetch';
import Headline from '../../../layouts/Headline/Headline';
import ClassicCart from '../../../layouts/Cart/Cart';

const Showcase = () => {
    const showCase = useFetch(`https://book-library-cyan-five.vercel.app/books`);
    const [filteredShowCase, setFilteredShowCase] = useState([]);

    useEffect(() => {
        if (showCase && showCase.length > 0) {
            const filtered = showCase.filter(item => item.createAt === '2025-01-08');
            setFilteredShowCase(filtered);
            console.log(filtered);
        }
    }, [showCase]);

    if (!showCase || showCase.length === 0) {
        return <p className='data-loading'>Waiting Data Loading...</p>;
    }
    console.log(showCase);
    console.log(filteredShowCase);

    return (
        <>
            <Headline titleIndex={1} customClass="custom-headline" />

            <Container>
                <div className="showcase">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        modules={[Navigation, Pagination, Autoplay]}
                        breakpoints={{
                            1400: { slidesPerView: 4 },
                            996: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            430: { slidesPerView: 1 },
                        }}
                    >
                        {filteredShowCase.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ClassicCart
                                    id={item.id}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    price={item.price}
                                    author={item.author}
                                    category={item.category}
                                    year={item.year}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </>
    );
};

export default Showcase;
