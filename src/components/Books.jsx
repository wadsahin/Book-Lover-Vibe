import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("../booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);

    console.log(books);

    return (
        <div className="my-6">
            <h2 className="text-4xl font-medium text-center mb-5">Books</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;