import {
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  EXAM_LIST_FAIL,
  EXAM_SCHEDULE_REQUEST,
  EXAM_SCHEDULE_SUCCESS,
  EXAM_SCHEDULE_FAIL,
} from "../actions/types";

const initialState = {
  ExamList: {},
  Courses: [],
};
export const EXAMListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXAM_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EXAM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ExamList: payload,
      };
    case EXAM_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const EXAMScheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXAM_SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EXAM_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        Courses: payload,
      };
    case EXAM_SCHEDULE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
