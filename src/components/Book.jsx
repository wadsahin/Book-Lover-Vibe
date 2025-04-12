/* eslint-disable no-unused-vars */

import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="card card-compact bg-base-100 shadow-lg">
            <figure className="bg-slate-100 m-4 py-6 rounded-md">
                <img
                    src={image}
                    className="h-48 w-40 object-cover rounded-md"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>
                    {
                        tags.map((tag, inx) => <span className="badge bg-gray-100 text-green-500 font-medium mr-2">{tag}</span>)
                    }
                </p>
                <h2 className="card-title">{bookName}</h2>
                <p className="text-gray-600">By: {author}</p>
                <hr className="border-dashed" />
                <div className="flex justify-between text-base font-medium">
                    <span>{category}</span>
                    <span className="flex items-center">{rating}<CiStar size={22} /></span>
                </div>
            </div>
        </div>
    );
};

export default Book;