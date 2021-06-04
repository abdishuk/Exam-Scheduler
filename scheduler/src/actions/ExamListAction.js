import {
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  EXAM_LIST_FAIL,
  EXAM_SCHEDULE_REQUEST,
  EXAM_SCHEDULE_SUCCESS,
  EXAM_SCHEDULE_FAIL,
} from "./types.js";
import Axios from "axios";
export const EXAMList = () => async (dispatch) => {
  try {
    dispatch({
      type: EXAM_LIST_REQUEST,
    });

    const { data } = await Axios.get("/api/timetable");
    dispatch({
      type: EXAM_LIST_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: EXAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const examSchedule = (schedule) => async (dispatch) => {
  try {
    dispatch({
      type: EXAM_SCHEDULE_SUCCESS,
      payload: schedule,
    });
    console.log(schedule);
  } catch (error) {
    dispatch({
      type: EXAM_SCHEDULE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
