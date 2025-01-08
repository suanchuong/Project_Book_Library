import { Container } from 'react-bootstrap';
import './Category.css';

const Category = () => {
    return (
        <Container>
            <div className="list-cate">
                <div className="box-cate">
                    <div className="box-cate-top">
                        <i className="fa-regular fa-hand-point-up"></i>
                    </div>

                    <div className="box-cate-title">
                        <p>Top Rated Books</p>
                    </div>

                    <div className="box-cate-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima dolorum perspiciatis libero odio ex nobis eveniet rerum, accusantium ea vitae aspernatur dolorem ipsa iste, dolores, facilis minus porro voluptatum.</p>
                    </div>
                </div>

                <div className="box-cate">
                    <div className="box-cate-top">
                        <i className="fa-solid fa-tower-broadcast"></i>
                    </div>

                    <div className="box-cate-title">
                        <p>Trending Books</p>
                    </div>

                    <div className="box-cate-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima dolorum perspiciatis libero odio ex nobis eveniet rerum, accusantium ea vitae aspernatur dolorem ipsa iste, dolores, facilis minus porro voluptatum.</p>
                    </div>
                </div>

                <div className="box-cate">
                    <div className="box-cate-top">
                        <i className="fa-solid fa-crown"></i>
                    </div>

                    <div className="box-cate-title">
                        <p>Top Genres</p>
                    </div>

                    <div className="box-cate-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima dolorum perspiciatis libero odio ex nobis eveniet rerum, accusantium ea vitae aspernatur dolorem ipsa iste, dolores, facilis minus porro voluptatum.</p>
                    </div>
                </div>

                <div className="box-cate">
                    <div className="box-cate-top">
                        <i className="fa-solid fa-feather"></i>
                    </div>

                    <div className="box-cate-title">
                        <p>New Arrivals</p>
                    </div>

                    <div className="box-cate-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima dolorum perspiciatis libero odio ex nobis eveniet rerum, accusantium ea vitae aspernatur dolorem ipsa iste, dolores, facilis minus porro voluptatum.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Category;