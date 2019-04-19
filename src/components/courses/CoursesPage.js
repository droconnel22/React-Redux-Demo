import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component{

    state = {
        course : {
            title:"foo title"
        }
    }

    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if(courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
    
            actions.loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
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
        this.props.actions.createCourse(this.state.course);
        alert(this.state.course.title);
    }
    
    render() {
        // by attaching the onSubmit to the form both the button click and the enter key will handle the submit event.
        return <>
        <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
            <input type="submit" value="save"/>            
        </form>
        <CourseList courses={this.props.courses}></CourseList>                
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
                authorName:state.authors.find(a => a.id === course.authorId).name
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
           createCourse: bindActionCreators(courseActions.createCourse, dispatch),
           loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
           loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
       }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);