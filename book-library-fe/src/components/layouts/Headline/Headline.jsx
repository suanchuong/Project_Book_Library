import './Headline.css';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Headline = ({ titleIndex = 0, customClass }) => {
    const titles = [
        "Discover Your Next Great Read",
        "Discover Our Must-Read Titles",
        "Testimonial",
    ];

    return (
        <div className={`headline ${customClass}`}>
            <Container>
                <div className="title">
                    <h1>{titles[titleIndex]}</h1>
                </div>
            </Container>
        </div>
    );
};

Headline.propTypes = {
    titleIndex: PropTypes.number,
    customClass: PropTypes.string,
};

export default Headline;