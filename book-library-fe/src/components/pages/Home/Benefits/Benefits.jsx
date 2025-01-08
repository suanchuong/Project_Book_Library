import './Benefits.css';
import Img from '../../../../assets/img/benefits-1.svg';
import { Container } from 'react-bootstrap';

const Benefits = () => {
    return (
        <Container>
            <div className="benefit-list">
                <div className="benefits-top">
                    <div className="benefits-top-left">
                        <img src={Img} alt="" />
                    </div>

                    <div className="benefits-top-right">
                        <h2 className="benefits-title">
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h2>
                        <p className="benefits-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className='benefits-check'>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                        </ul>
                    </div>
                </div>


                <div className="benefits-bottom">
                    <div className="benefits-bottom-left">
                        <h2 className="benefits-title">
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h2>
                        <p className="benefits-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className='benefits-check'>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="fa-solid fa-check"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                        </ul>
                    </div>

                    <div className="benefits-bottom-right">
                        <img src={Img} alt="" />
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Benefits;