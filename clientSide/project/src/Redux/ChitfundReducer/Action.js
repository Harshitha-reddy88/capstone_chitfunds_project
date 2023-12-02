import {
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_FAILURE,
    GET_ALL_COURSE_SUCCESS,

    GET_ALL_EXPLORE_REQUEST,
    GET_ALL_EXPLORE_FAILURE,
    GET_ALL_EXPLORE_SUCCESS,
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




export const getAllExploreRequest = () => ({
    type: GET_ALL_EXPLORE_REQUEST,
});
export const getAllExploreFailure = () => ({
    type: GET_ALL_EXPLORE_FAILURE,
})
export const getAllExploreSuccess = (payload) => ({
    type: GET_ALL_EXPLORE_SUCCESS,
    payload,
})

export const getAllExploreData = () => (dispatch) => {
    dispatch(getAllExploreRequest());
    axios
        .get("http://localhost:8080/exploreData")
        .then((res) => dispatch(getAllExploreSuccess(res.data)))
        .catch(() => dispatch(getAllExploreFailure()));
}