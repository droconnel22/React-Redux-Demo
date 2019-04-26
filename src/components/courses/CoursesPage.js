import React from "react";
import {connect} from "react-redux";


import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

import {
    getAuthors,
    loadCourses,
} from "../../redux/actions"

class CoursesPage extends React.Component{

    state = {
        redirectToAddCoursePage:false
    }

    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if(courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
    
            actions.loadAuthors();
        }       
    }

    // arrow functions inherit the binding context of their enclosing scope.
    handleChange = (event) => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({
            course
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //this.props.actions.createCourse(this.state.course);
        alert(this.state.course.title);
    }
    
    render() {
        // by attaching the onSubmit to the form both the button click and the enter key will handle the submit event.
        return <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
            <h2>Courses</h2>
                <button
                    style={{marginBottom:20}}
                    className="btn btn-primary add-course"
                    onClick={() => this.setState({
                        redirectToAddCoursePage:true
                    })}>
                    Add Course
                 </button>
        <CourseList courses={this.props.courses} />                
        </>
    }
}

// prop types helps us specify the prop types our component excepts.
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// be specific. require only the data it needs
// this funciton determines what state is passed to our component via props
function mapStateToProps(state, ownProps){
    return {        
        courses:
            state.authors.length === 0 
            ? [] 
            : state.courses.map(course => {
            return {
                ...course,
                authorName:function (){
                    let author = state.authors.find(a => a.id === course.authorId);
                    return author || "not provided";
                }
            }
        }),
        authors: state.authors
    }
}

// this lets us declare what actions to pass to our component on props
//optional
// remember if you don't call dispatch nothing will happen. 
// Action creators must be called by dispatch
// when this is an object, everything is automatically binded to dispatch
function mapDispatchToProps(dispatch){
   return {
       actions: {          
           loadCourses: bindActionCreators(loadCourses, dispatch),
           loadAuthors: bindActionCreators(getAuthors, dispatch)
       }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);