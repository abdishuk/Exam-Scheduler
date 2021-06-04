import { combineReducers } from "redux";
import { EXAMListReducer, EXAMScheduleReducer } from "./ExamListReducer";

export default combineReducers({
  exams: EXAMListReducer,
  ExamCourses: EXAMScheduleReducer,
});
