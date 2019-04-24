import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";


class ManageCoursesPage extends React.Component{

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
        <h2>Manage Course</h2>
        </>
    }
}

// prop types helps us specify the prop types our component excepts.
ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// 4. Redux Mappings

// be specific. require only the data it needs
// this funciton determines what state is passed to our component via props
function mapStateToProps(state, ownProps){
    return {        
        courses: state.courses,
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

// 5. Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);