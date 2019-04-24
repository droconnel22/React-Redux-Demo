import { createSelector } from 'reselect'
export const bookSelector = createSelector(
   state=>state.books,
   books=>books
);