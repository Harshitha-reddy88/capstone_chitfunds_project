import {
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_FAILURE,
    GET_ALL_COURSE_SUCCESS,

    GET_ALL_EXPLORE_REQUEST,
    GET_ALL_EXPLORE_FAILURE,
    GET_ALL_EXPLORE_SUCCESS,
} from "./ActionType";

export const initState = {
    chitFund: [],
    exploreData: [],
    error: "",
    loading: false,
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case GET_ALL_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Something went wrong",
            };
        case GET_ALL_COURSE_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                chitFund: action.payload,
            };
        case GET_ALL_EXPLORE_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case GET_ALL_EXPLORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: "something went wrong",
            };
        case GET_ALL_EXPLORE_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                exploreData: action.payload,
            }
        default:
            return state;
    }
};
export default reducer;