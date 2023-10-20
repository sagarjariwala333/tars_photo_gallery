import {IMAGE_LIST_REQUEST,
IMAGE_LIST_SUCCESS,
IMAGE_LIST_ERR,
TEST,
SET_QUERY} from './types';

export const test=()=>{
    return {
        type: TEST
    }
}

export const listImageRequest=(q, page)=>{
    return {
        type: IMAGE_LIST_REQUEST,
        query:q,
        page
    }
}

export const listImageSuccess=(data)=>{
    return {
        type: IMAGE_LIST_SUCCESS,
        data
    }
}

export const listImageFailue=(error)=>{
    return {
        type: IMAGE_LIST_ERR,
        error
    }
}
