import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useFetch from '../../../Hooks/useFetch';
import './Detail.css';

const Detail = () => {
    const { id } = useParams();
    console.log("Product ID:", id);
    const detailBook = useFetch(`https://detailBook-library-cyan-five.vercel.app/detailBooks/${id}`);
    console.log(detailBook);

    return (
        <div className="detail-product">
            <Container>
                {detailBook ? (
                    <div className="product-detail-container">
                        <div className="detail-left">
                            <img src={detailBook.thumbnail} alt={detailBook.title} />
                        </div>
                        <div className="detail-right">
                            <h2>{detailBook.title}</h2>
                            <p>Author: {detailBook.author}</p>
                            <p>Category: {detailBook.category}</p>
                            <p>Year: {detailBook.year}</p>
                            <p>Description:{detailBook.description}</p>
                            <p>Price:$ {detailBook.price}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </div>
    );
};

export default Detail;
