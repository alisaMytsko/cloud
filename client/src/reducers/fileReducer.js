import {actions} from "../actions/file";

const fileState = {
  files: [],
  currentDir: null,
}

export default function fileReducer(state = fileState, action) {
  switch (action.type){
    case actions.SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: action.payload,
      }
    case actions.SET_FILES:
      return {
        ...state,
       files: action.payload,
      }
    default:
      return state
  }
}
