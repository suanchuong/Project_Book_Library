import Banner from "../Home/Banner/Banner";
import Headline from "../../layouts/Headline/Headline";
import Category from '../Home/Category/Category';
import Benefits from "../Home/Benefits/Benefits";
import Showcase from "./Showcase/Showcase";
import Attachment from "./Attack/Attack";
import Review from '../Home/Review/Review';
import Newsletter from "./Newsletter/Newsletter";


const Home = () => {
    return (
    <>
        <Banner></Banner>
        <Headline titleIndex={0}></Headline>
        <Category></Category>
        <Benefits></Benefits>
        <Showcase></Showcase>
        <Attachment></Attachment>
        <Review></Review>
        <Newsletter></Newsletter>
    </>
    );
    
};

export default Home;