import {
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_FAILURE,
    GET_ALL_COURSE_SUCCESS,
} from "./ActionType";

import axios from "axios";

export const getAllCourseRequest = () => ({
    type: GET_ALL_COURSE_REQUEST,
});

export const getAllCourseFailure = () => ({
    type: GET_ALL_COURSE_FAILURE,
});

export const getAllCourseSuccess = (payload) => ({
    type: GET_ALL_COURSE_SUCCESS,
    payload, // Pass the payload to the action
});

export const getAllcourse = () => (dispatch) => {
    dispatch(getAllCourseRequest());
    axios
        .get("http://localhost:8080/data")
        .then((res) => dispatch(getAllCourseSuccess(res.data))) // Pass the response data as the payload
        .catch(() => dispatch(getAllCourseFailure()));
};