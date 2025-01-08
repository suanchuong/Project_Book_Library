import './Banner.css';
import Image from '../../../../assets/img/banner.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="overplay">
                <img src={Image} alt="banner" />
            </div>
            <div className="title-1">
                <h5>Open your book</h5>
            </div>
            <div className="title-2">
                <h2>Open your world !</h2>
            </div>
            <div className="btn">
                <button>Read more</button>
            </div>
        </div>
    );
};

export default Banner;
