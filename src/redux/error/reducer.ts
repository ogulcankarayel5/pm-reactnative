import { REMOVE_ERRORS, SET_ERRORS } from "./constants";
import { ErrorActionTypes, ErrorState } from "./types";

export const initialState: ErrorState = {
  errors: null,
};

export function errorReducer(
  state = initialState,
  action: ErrorActionTypes
): ErrorState {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case REMOVE_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
}
