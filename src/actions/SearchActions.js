import * as types from '../constants/ActionTypes';

export function search(value) {
	  return {
	    type: 'SEARCH',
	    value
	  };
	}
