import Row from "./Row";
import { useSelector } from "react-redux";
import "./Table.css";
import { Container } from "react-bootstrap";
import Message from "./AlertComponent";
import Loader from "./Loader";
function TableComponent() {
  const examCourses = useSelector((state) => state.ExamCourses);
  const { Courses, loading, error } = examCourses;
  let SortedCourses = [{}];

  SortedCourses = Courses?.sort(function (a, b) {
    return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
  });

  return (
    <div className="main container">
      <table table-responsive-md>
        <tbody>
          <Row />
        </tbody>
      </table>

      <table class="content-table table-responsive-md ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course CODE</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message var="danger">An error occured</Message>
          ) : (
            SortedCourses.length > 0 &&
            SortedCourses.map((course, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>

                  <td>{course.coursecode}</td>
                  <td>{course.date}</td>
                  <td>{course.time}</td>
                </tr>
              );
            })
          )}
          {}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
