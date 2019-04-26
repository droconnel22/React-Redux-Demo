import { createSelector } from 'reselect'
export const slugCourseSelector = createSelector(
   state=>state.courses,
   
);