export const actions = {
  SET_FILES: 'SET_FILES',
  SET_CURRENT_DIR: 'SET_CURRENT_DIR',
  GET_FILES: 'GET_FILES',
  CREATE_FILE: 'CREATE_FILE',
  ADD_FILE: 'ADD_FILE',
  SET_POP_UP_DISPLAY: 'POP_UP_DISPLAY',
  PUSH_TO_STACK: 'PUSH_TO_STACK',
  POP_FROM_STACK: 'POP_TO_STACK',
};


export const setPopupDisplay = popup => ({ type: actions.SET_POP_UP_DISPLAY, payload: popup });
export const getFilesActionCreator = dirId => ({ type: actions.GET_FILES, payload: dirId });
export const setFilesActionCreator = files => ({ type: actions.SET_FILES, payload: files });
export const createFileActionCreator = file => ({ type: actions.CREATE_FILE, payload: file });
export const addFileActionCreator = file => ({ type: actions.ADD_FILE, payload: file });
export const setCurrentDirActionCreator = dir => ({ type: actions.SET_CURRENT_DIR, payload: dir });
export const pushToStack = stack => ({ type: actions.PUSH_TO_STACK, payload: stack });
export const popFromStack = stack => ({ type: actions.POP_FROM_STACK, payload: stack });
