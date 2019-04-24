import { createSelector } from 'reselect'
export const authorSelector = createSelector(
   state=>state.authors,
   authors=>authors
);