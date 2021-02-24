export const actions = {
  SET_FILES: 'SET_FILES',
  SET_CURRENT_DIR: 'SET_CURRENT_DIR',
  GET_FILES: 'GET_FILES',
};

export const getFilesActionCreator = dirId => ({ type: actions.GET_FILES, payload: dirId });
export const setFilesActionCreator = files => ({ type: actions.SET_FILES, payload: files });
export const setCurrentDirActionCreator = dir => ({ type: actions.SET_CURRENT_DIR, payload: dir });
