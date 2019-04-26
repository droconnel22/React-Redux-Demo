import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {
    updateCourse,
    loadCourses,
    getAuthors
} from "../../redux/actions";
import {
    slugCourseSelector
} from "../../redux/selectors";


import CourseForm from "./CourseForm";


const newCourse = {
    id:null,
    title:"",
    authorId:null,
    category:""
};

// userState Hook allows us to add React State to functional components
const ManageCoursesPage =  ({ 
    courses,
    authors, 
    getAuthors, 
    loadCourses, 
    updateCourse,
    history,
    course : initialCourse
})  => { 

    // Avoid using Redux for all state. Use plain React State for
    // data only one few components use (such as form state)
    // redux vs local state? who cares about the data?
    const [ course, setCourse] = useState(initialCourse);
    const [ errors, setErrors] = useState({});

    // The empty array as a second argument to effect means 
    // the effect will run once when the component mounts.
    useEffect(() => {
        if(courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        } else {
            setCourse({initialCourse});
        }           
        if(authors.length === 0) {
            getAuthors();
        }
    }, [initialCourse]);


    const handleChange = event => {
        const {name, value} = event.target;
        setCourse(previousCourse => ({
            ...previousCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    };

    const handleSave = event => {
        event.preventDefault();
        updateCourse(course,history);
    }
       

    return (
        <>
        <h2>Manage Course</h2>
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} />
        </>
    )
};

// prop types helps us specify the prop types our component excepts.
ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    getAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    course:PropTypes.object.isRequired,
    updateCourse: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired // Any component loaded via <rout> getes history passed in onprops from react router
};

// selectors!!! using reselect
function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

// 4. Redux Mappings
// be specific. require only the data it needs
// this funciton determines what state is passed to our component via props
// React router adds things to props
function mapStateToProps(state, ownProps){
    
    //In App.js -> "/course/:slug" -> access in mapStateToProsp via ownProps.params.match.slug
    const slug = ownProps.match.params.slug;
    const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug): newCourse;
    
    return {        
        courses: state.courses,
        authors: state.authors,
        course
    }
}

// this lets us declare what actions to pass to our component on props
//optional
// remember if you don't call dispatch nothing will happen. 
// Action creators must be called by dispatch
// when this is an object, everything is automatically binded to dispatch
const mapDispatchToProps = {   
    loadCourses,
    getAuthors,
    updateCourse
};

// 5. Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);