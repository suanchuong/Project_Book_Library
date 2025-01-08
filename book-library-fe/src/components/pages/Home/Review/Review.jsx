import './Review.css';
import Headline from '../../../layouts/Headline/Headline';
import { Container } from 'react-bootstrap';
import Pic_1 from '../../../../assets/img/review/1.jpg';
import Pic_2 from '../../../../assets/img/review/2.jpg';
import Pic_3 from '../../../../assets/img/review/3.jpg';

const Review = () => {
    return (
        <>
            <Headline titleIndex={2} customClass="custom-headline" />
            <Container>
                <div className='review'>
                    <div className="left">
                        <div className="head">
                            <h5>REVIEW & AWARDS</h5>
                            <h2>Customers Reviews</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in quae dolor sunt nesciunt debitis illum aperiam!</p>
                        </div>
                        <div className="people">
                            <div className="thumb">
                                <img src={Pic_1} alt="" />
                                <img src={Pic_2} alt="" />
                                <img src={Pic_3} alt="" />
                            </div>
                        </div>
                        <div className="view">
                            <i className="fa-solid fa-star"></i>
                            4.9
                            <span>(500 reviews)</span>
                        </div>
                    </div>

                    <div className="right">
                        <div className="image">
                            <img src={Pic_1} alt="" />
                            <div className="name-review">
                                <p>Jack Morrison</p>
                                <p className='job'>Engineer</p>
                            </div>
                        </div>

                        <div className="text">
                            <div className="rate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sequi cupiditate, corrupti maxime hic eos. Cumque dolorem provident blanditiis tenetur illum nemo a temporibus iste quos fuga harum, velit repellendus.</p>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    );
};

export default Review;