import React, {Component} from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseAction";
import { bindActionCreators } from "redux";

 class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ""}
    };
  } //constructor


 courseRow(course, index) {
   return (
     <div key={index}> {course.title}</div>
   );
 }

  render() {
    return (
      <div>
        <h1>Course</h1>
        {this.props.courses.map(this.courseRow)}
        
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispathToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispathToProps)(CoursePage);
