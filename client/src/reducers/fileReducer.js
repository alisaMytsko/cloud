import {actions} from "../actions/file";

const fileState = {
  files: [],
  currentDir: null,
  popupDisplay: 'none',
  dirStack: [],
  filePath: '/'
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
    case actions.ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload]
      }
    case actions.SET_POP_UP_DISPLAY:
      return {
        ...state,
        popupDisplay: action.payload,
      }
    case actions.PUSH_TO_STACK:
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload],
      }
    case actions.POP_FROM_STACK:
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload],
      }
    case actions.ADD_TO_FILE_PATH:
      return {
        ...state,
        filePath: `${state.filePath}/${action.payload}`,
      }
    case actions.BACK_TO_FILE_PATH:
      return {
        ...state,
        filePath: action.payload,
      }
    default:
      return state
  }
}
