import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    // console.log(books);
    const { id } = useParams();
    const book = books?.find(book => book?.bookId == id);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl gap-10">
            <figure className="flex-1">
                <img
                    src={image}
                    className="h-dvh"
                    alt="Album" />
            </figure>
            <div className="flex-1">
                <h2 className="text-3xl font-medium">{bookName}</h2>
                <p className="my-3">By: {author}</p>
                <hr />
                <p className="my-2">{category}</p>
                <hr />
                <p className="my-3"><strong>Review: </strong><span className="text-gray-500">{review}</span></p>
                <div className="flex gap-3 items-center my-4">
                    <strong>Tag</strong>
                    {
                        tags.map((tag, idx) => <span key={idx} className="badge bg-gray-100 text-green-500 font-medium mr-2">{tag}</span>)
                    }
                </div>
                <hr />
                <div className="my-3 max-w-sm">
                    <p className="flex text-gray-500 mb-3 "><span className="w-44">Number of Pages:</span> <strong>{totalPages}</strong></p>
                    <p className="flex text-gray-500 mb-3 "><span className="w-44" >Publisher:</span> <strong>{publisher}</strong></p>
                    <p className="flex text-gray-500 mb-3 "><span className="w-44">Year of Publishing:</span> <strong>{yearOfPublishing}</strong></p>
                    <p className="flex text-gray-500 mb-3 "><span className="w-44">Rating:</span> <strong>{rating}</strong></p>
                </div>
                <div className="card-actions my-5">
                    <Link><button className="btn btn-outline">Read</button></Link>
                    <Link><button className="btn btn-accent text-white">Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;