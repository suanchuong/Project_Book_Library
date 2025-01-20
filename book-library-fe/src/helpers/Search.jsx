import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import './Search.css';

const Search = () => {
    const books = useFetch('https://book-library-cyan-five.vercel.app/books');
    const [query, setQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showSuggestedBooks, setShowSuggestedBooks] = useState(true);

    // Cập nhật danh sách sách được lọc khi dữ liệu từ API thay đổi
    useEffect(() => {
        if (query.trim() === "") {
            setShowSuggestedBooks(true);
            setFilteredBooks(books.slice(0, 3));
        } else {
            setShowSuggestedBooks(false);
            const lowercasedInput = query.toLowerCase();
            const filtered = books.filter((book) =>
                book.title.toLowerCase().includes(lowercasedInput)
            );
            setFilteredBooks(filtered);
        }
    }, [books, query]);

    const handleSearch = (input) => {
        setQuery(input);
    };

    return (
        <div className="search-container">
            <h1>Library Books</h1>

            <input
                type="text"
                placeholder="Finding books..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />

            {/* Loading product */}
            {books.length === 0 && <p className="search-loading">Book is loading...</p>}

            {/* Gợi ý sản phẩm */}
            {showSuggestedBooks && query.trim() === "" && (
                <div className="suggested-books">
                    <h3>Suggested Books</h3>
                    {books.slice(0, 3).map((book) => (
                        <div className="suggested-books-item" key={book._id}>
                            <Link to={`/product/${book._id}`}>
                                <div className="suggested-books-item-left">
                                    <img src={book.thumbnail} alt={book.title} />
                                </div>
                                <div className="suggested-books-item-right">
                                    <strong>{book.title}</strong>
                                    <p>Author: {book.author}</p>
                                    <p>Release: {book.year}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {/* Kết quả tìm kiếm */}
            <div className="search-results">
                {filteredBooks.length > 0 && query.trim() !== "" ? (
                    filteredBooks.map((book) => (
                        <div className="suggested-books-item" key={book._id}>
                            <Link to={`/product/${book._id}`}>
                                <div className="suggested-books-item-left">
                                    <img src={book.thumbnail} alt={book.title} />
                                </div>

                                <div className="suggested-books-item-right">
                                    <strong>{book.title}</strong>
                                    <p>Author: {book.author}</p>
                                    <p>Release: {book.year}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    query.trim() !== "" && (
                        <p className="no-results">No matching results were found</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Search;
