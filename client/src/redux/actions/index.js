import axios from "axios";

// courses
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const GET_COURSE_BY_NAME = "GET_COURSE_BY_NAME";
export const GET_COURSE_DETAIL = "GET_COURSE_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";

// cart:
export const ADD_TO_CART = "ADD_TO_CART";
export const BUY_NOW = "BUY_NOW";
export const DELETE_COURSE_FROM_CART = "DELETE_COURSE_FROM_CART";

// filtering & ordering:
export const FILTERS = "FILTERS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

// create & mannage course:
export const CREATE_COURSE = "CREATE_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const ARCHIVE_COURSE = "ARCHIVE_COURSE";
export const GET_REVIEWS = "GET_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const GET_VIDEOS = "GET_VIDEOS";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const POST_REVIEW = "POST_REVIEW";


export const getAllCourses = () => async (dispatch) => {
  try {
    const all = await axios.get("/getAllCourses");
    return dispatch({
      type: GET_ALL_COURSES,
      payload: all.data,
    });
  } catch (error) {}
};

export const byName = (name) => async (dispatch) => {
  try {
    const byName = await axios.get(`/getByName?name=${name}`);
    return dispatch({
      type: GET_COURSE_BY_NAME,
      payload: byName.data,
    });
  } catch (error) {}
};

export const getCourseDetail = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/getDetail/${id}`);
    return dispatch({
      type: GET_COURSE_DETAIL,
      payload: detail.data,
    });
  } catch (error) {}
};

export const clearDetail = () => async (dispatch) => {
  try {
    return dispatch({
      type: CLEAR_DETAIL,
    });
  } catch (error) {}
};

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get("/categories");
    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {}
};

export const addToCart = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: ADD_TO_CART,
      payload,
    });
  } catch (error) {}
};

export const clearFromCart = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: DELETE_COURSE_FROM_CART,
      payload,
    });
  } catch (error) {}
};

export const buyNow = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: BUY_NOW,
      payload,
    });
  } catch (error) {}
};

export const filters = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: FILTERS,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderByName = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: ORDER_BY_NAME,
      payload,
    });
  } catch (error) {}
};

export const orderByRating = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: ORDER_BY_RATING,
      payload,
    });
  } catch (error) {}
};

export const createCourse = (form) => async (dispatch) => {
  try {
    const data = await axios.post("/", form);
    return dispatch({
      type: CREATE_COURSE,
      payload: data,
    });
  } catch (error) {}
};

export const archiveCourse = () => (dispatch) => {
  try {
    return dispatch({
      type: ARCHIVE_COURSE,
    });
  } catch (error) {}
};

export const getReviews = () => (dispatch) => {
  try {
    return dispatch({
      type: GET_REVIEWS,
    });
  } catch (error) {}
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await axios.delete("/");
    return dispatch({
      type: DELETE_COURSE,
    });
  } catch (error) {}
};

export const postReview = (payload) => {
  return async function (dispatch) {
    try {
      var json = await axios.post("/createReview", payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
};
