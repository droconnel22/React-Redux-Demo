import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import books   from "./bookReducer";


const rootReducer = combineReducers({
    courses,
    authors,
    books
});

export default rootReducer;