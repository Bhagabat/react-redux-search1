import * as types from '../constants/ActionTypes';

const allData = [
                 {value:"www.youtube.com"},
                 {value:"www.youtube.com/hjhj"},
                 {value:"www.youtube.com/video"},
                 {value:"www.google.com"},
                 ]
const initialState = {
  data:[]
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        data:allData.filter(function(v){
        	return v.value.indexOf(action.value)>-1
        })
      }
    

    default:
      return state;
  }
}
