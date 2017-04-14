import React, {Component} from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseAction";

 class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  } //constructor

 onTitleChange(event) {
   const course = this.state.course;
   course.title = event.target.value;
   this.setState({course: course});
 }

 onClickSave(event) {
   this.props.dispatch(courseActions.createCourse(this.state.course));
   /*this.setState({course: ""});*/
 }

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
        <h2>Add Course</h2>
        <input type="text" value={this.state.course.title} onChange={this.onTitleChange} placeholder="Add course"/>
        <input type="submit" value="save" onClick={this.onClickSave}/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps, null)(CoursePage);
