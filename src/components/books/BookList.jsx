import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const BookList =  ({books}) => (
   
    <table className="table">
        <thead>
            <tr>
                <th/>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => {
                return ( 
                    <tr key ={book.id}>
                        <td>
                            <a 
                                className="btn btn-light"
                                href={"/books" + book.slug}
                            >
                                watch
                            </a>
                        </td>
                        <td>
                            <Link to={"/book/" + book.slug}>{book.title}</Link>
                        </td>
                        <td>
                            {book.authorName}
                        </td>
                        <td>
                            {book.category}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

BookList.prototypes = {
    books: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired
};

export default BookList;