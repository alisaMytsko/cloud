import { call, takeEvery, put } from 'redux-saga/effects';
import { actions, setFilesActionCreator,addFileActionCreator } from '../actions/file'
import {toastr} from 'react-redux-toastr'
import { getFiles, createFile } from '../api/disk';


export function* getFilesSaga({ payload }) {
  try {
    const { data } = yield call(getFiles, { url: `http://localhost:5000/api/files/${payload ? '?parent='+payload : ''}` });
    yield put(setFilesActionCreator(data));
  } catch (e) {
    toastr.error(e.response.data.message);
  }
}

export function* createFileSaga({ payload }) {
  try {
    console.log(payload);
    const { data } = yield call(createFile, payload);
    yield put(addFileActionCreator(data));
  } catch (e) {
    toastr.error(e.response.data.message);
  }
}


export default [
  takeEvery(actions.GET_FILES, getFilesSaga),
  takeEvery(actions.CREATE_FILE, createFileSaga),
];
