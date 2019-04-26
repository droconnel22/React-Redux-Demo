import React, { useState, useEffect,useRef } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"

import BookList from "./BookList";


import {
    getBooks ,
    getAuthors   
} from '../../redux/actions'

import {
    bookSelector,
    authorSelector
} from "../../redux/selectors";

 
const BookPage = ({books, getBooks, getAuthors}) =>{
    console.log("use effect.....");   
    useEffect(() => {
        getAuthors();
        getBooks();
        // Update the document title using the browser API
          console.log("use effect.....");
      }, []);

    return (
        <BookList books={books}></BookList>       
    );
};



// prop types helps us specify the prop types our component excepts.
BookPage.propTypes = {
    books: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,  
};


const mapStateToProps =  (state) => {
    console.log("state", state);
    const selectedBooks = bookSelector(state);
    const selectedAuthors = authorSelector(state);
    console.log("IN map state to props ! selected books", selectedBooks);
    return {        
        books:
            selectedAuthors.length === 0 
            ? [] 
            : selectedBooks.map(book => {
            return {
                ...book,
                authorName:selectedAuthors.find(a => a.id === book.authorId).name
            }
        }),
        authors: selectedAuthors
    }
};

const mapDispatchToProps = {
    getBooks,
    getAuthors
};




// export const CartManageViewContainer = connect(
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);