import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactSlider from 'react-slider';
import Pagination from 'react-bootstrap/Pagination';
import useFetch from '../../../Hooks/useFetch';
import Cart from '../../layouts/Cart/Cart';
import Headline from '../../layouts/Headline/Headline';
import './Product.css';

const Product = () => {
    const product = useFetch('https://book-library-cyan-five.vercel.app/books');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    // const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState([10, 900]);
    const itemsPerPage = 9;
    // const location = useLocation();


    //Hàm lọc filter
    const filteredProduct = product.filter(item => {
        const categoryMatch = selectedCategory ? item.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const authorMatch = selectedAuthor ? item.author.toLowerCase() === selectedAuthor.toLowerCase() : true;
        const tagMatch = selectedTag ? item.tag.trim().toLowerCase() === selectedTag.toLowerCase() : true;
        //Xét giá trị mặc định của thanh giá về true khi chưa đụng tới filter
        const priceMatch = (priceRange && priceRange.length === 2 && (priceRange[0] !== 10 || priceRange[1] !== 900))
            ? item.price >= priceRange[0] && item.price <= priceRange[1]
            : true;
        return categoryMatch && authorMatch && tagMatch && priceMatch;
    });

    //Hàm chia page
    const totalPages = Math.ceil(filteredProduct.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProduct = filteredProduct.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginationItem = Array.from({ length: totalPages }, (_, i) => (
        <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
        >
            {i + 1}
        </Pagination.Item>
    ));

    //Hàm reset filter về lại từ đầu
    const resetFiltered = () => {
        // setLoading(true);
        setSelectedCategory('');
        setSelectedTag('');
        setSelectedAuthor('');
        setPriceRange([10, 900]);
        setCurrentPage(1);
        // setLoading(false);
    }

    //Hàm loading khi chọn filter 0.5s
    // const applyFilter = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 500);
    // }


    return (
        <div className="product">
            <Headline titleIndex={3} customClass="custom-headline" />
            <div className="list-product">
                <Container>
                    <div className="filter">
                        <div className="filter-top">
                            <h2>Filter</h2>
                            <button onClick={resetFiltered}>Reset filter</button>
                        </div>

                        <div className="filter-mid">
                            <div className="list-filter">
                                <h3>Filter By Genres</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className="list-filter">
                                <h3>Filter By Author</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className="list-filter">
                                <h3>Filter By Rating</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className="list-filter">
                                <h3>Filter By Tag</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className="list-filter">
                                <h3>Filter By Price</h3>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    value={priceRange}
                                    onChange={setPriceRange}
                                    min={0}
                                    max={1500}
                                    step={5}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="cart-product">
                        {currentProduct.length > 0 ? (
                            currentProduct.map((item) => (
                                <Cart
                                    key={item._id}
                                    id={item._id}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    price={item.price.toString()}
                                    author={item.author}
                                    category={item.category}
                                    year={item.year}
                                />
                            ))
                        ) : (
                            <p>No Product Found</p>
                        )}

                    </div>

                    <div className="pagination-container">
                        <Pagination>{paginationItem}</Pagination>
                    </div>
                </Container>
            </div>

        </div>

    );
};

export default Product;