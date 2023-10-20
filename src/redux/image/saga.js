import { takeEvery,put, call } from "redux-saga/effects";
import { TEST,IMAGE_LIST_REQUEST, IMAGE_LIST_SUCCESS, IMAGE_LIST_ERR } from "./types";
import { getImages } from "../../service";

function* getImageLIst(action) {
  const {query, page} = action;
    
  console.log("saga", query)
    //console.warn("Sign up Saga",data);
    const data = yield call(getImages,query, page)
    let temp;

    temp = (query) ? data.data.results : data.data

    console.log("saga", data)
    yield put({type:IMAGE_LIST_SUCCESS,data:temp})
}

function* imageSaga() {
    yield takeEvery(IMAGE_LIST_REQUEST,getImageLIst);
}

export default imageSaga;