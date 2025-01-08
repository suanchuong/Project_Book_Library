import { Container } from 'react-bootstrap';
import './Showcase.css';
import book from '../../../../assets/img/test.png'
import Headline from '../../../layouts/Headline/Headline';


const Showcase = () => {
    return (
        <>
            <Headline titleIndex={1} customClass="custom-headline" />

            <Container>
                <div className="showcase">
                    <div className="box-showcase">
                        <div className="thumb">
                            <img src={book} alt="" />
                        </div>

                        <div className="content">
                            <h5 className="title">Name of the book</h5>
                            <p className="author">Author: </p>
                            <p className="genres">Genres: </p>
                            <p className="release">Release: </p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div className="box-showcase">
                        <div className="thumb">
                            <img src={book} alt="" />
                        </div>

                        <div className="content">
                            <h5 className="title">Name of the book</h5>
                            <p className="author">Author: </p>
                            <p className="genres">Genres: </p>
                            <p className="release">Release: </p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div className="box-showcase">
                        <div className="thumb">
                            <img src={book} alt="" />
                        </div>

                        <div className="content">
                            <h5 className="title">Name of the book</h5>
                            <p className="author">Author: </p>
                            <p className="genres">Genres: </p>
                            <p className="release">Release: </p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div className="box-showcase">
                        <div className="thumb">
                            <img src={book} alt="" />
                        </div>

                        <div className="content">
                            <h5 className="title">Name of the book</h5>
                            <p className="author">Author: </p>
                            <p className="genres">Genres: </p>
                            <p className="release">Release: </p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Showcase;