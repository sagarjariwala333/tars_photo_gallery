import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_ERR,
  TEST,
  SET_QUERY,
} from "./types";

const initialState = {
  loading: false,
  data: [],
  error: null,
  query: "",
  page: 1,
};

const imageReducer = (state = initialState, action) => {
  const { type, data, error,query, page } = action;

  switch (type) {
    case TEST:
      return state;

    case IMAGE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        query,
        page,
        error: null,
      };

    case IMAGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data,
        error: null,
      };

    case IMAGE_LIST_ERR:
      return {
        ...state,
        loading: false,
        error,
      };

    default:
      return state;
  }
};

export default imageReducer;
